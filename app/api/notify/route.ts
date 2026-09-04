import { createMimeMessage } from "mimetext/browser";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_TO = "mysticalexpressionismpaintings@gmail.com";
const NOTIFY_FROM = "notify@mladenilic.art";
const NOTIFY_SUBJECT = "Notify me of new paintings";

type EmailBinding = {
  send: (message: unknown) => Promise<unknown>;
};

type SendResult = { ok: boolean; error?: string };

export async function POST(request: Request) {
  const email = await readEmail(request);
  if (!email || !EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false, error: "invalid email" }, { status: 400 });
  }

  console.info("notify signup", email);
  const result = await sendNotice(email);
  return Response.json(
    {
      ok: result.ok,
      error: result.error ?? null,
    },
    {
      status: result.ok ? 200 : 502,
      headers: {
        "Cache-Control": "no-store",
        "x-notify-rev": "notify-live-b4b0",
        "x-notify-error": (result.error ?? "").slice(0, 500),
      },
    },
  );
}

async function readEmail(request: Request): Promise<string> {
  const contentType = request.headers.get("content-type") ?? "";
  try {
    if (contentType.includes("application/json")) {
      const body = (await request.json()) as { email?: string };
      return (body.email ?? "").trim();
    }
    const form = await request.formData();
    return String(form.get("email") ?? "").trim();
  } catch {
    return "";
  }
}

async function sendNotice(subscriber: string): Promise<SendResult> {
  const text = `${subscriber} asked to be notified when new paintings become available.`;
  const errors: string[] = [];

  const bindingResult = await getEmailBinding();
  if (bindingResult.error) {
    errors.push(bindingResult.error);
  }

  const binding = bindingResult.binding;
  if (binding) {
    const attempts: unknown[] = [
      {
        from: { email: NOTIFY_FROM, name: "mladenilic.art" },
        to: NOTIFY_TO,
        replyTo: subscriber,
        subject: NOTIFY_SUBJECT,
        text,
      },
      {
        from: NOTIFY_FROM,
        to: NOTIFY_TO,
        replyTo: subscriber,
        subject: NOTIFY_SUBJECT,
        text,
      },
      {
        from: NOTIFY_FROM,
        subject: NOTIFY_SUBJECT,
        text,
        replyTo: subscriber,
      },
    ];

    for (const [index, message] of attempts.entries()) {
      const result = await trySend(binding, message);
      if (result.ok) return result;
      errors.push(`structured[${index}]: ${result.error}`);
    }

    for (const [index, rawMessage] of rawVariants(subscriber, text).entries()) {
      const raw = await sendRawMime(binding, rawMessage);
      if (raw.ok) return raw;
      errors.push(`raw[${index}]: ${raw.error}`);
    }

    const mime = await sendMimeText(binding, subscriber, text);
    if (mime.ok) return mime;
    errors.push(`mimetext: ${mime.error}`);
  }

  return { ok: false, error: errors.join(" | ") || "email binding unavailable" };
}

async function getEmailBinding(): Promise<{ binding: EmailBinding | null; error?: string }> {
  try {
    const { env } = (await import("cloudflare:workers")) as {
      env: { NOTIFY_EMAIL?: EmailBinding };
    };
    if (!env.NOTIFY_EMAIL) {
      return { binding: null, error: "NOTIFY_EMAIL binding missing" };
    }
    return { binding: env.NOTIFY_EMAIL };
  } catch (error) {
    return { binding: null, error: `workers import: ${errorMessage(error)}` };
  }
}

async function trySend(binding: EmailBinding, message: unknown): Promise<SendResult> {
  try {
    await binding.send(message);
    return { ok: true };
  } catch (error) {
    console.error("notify send failed", error);
    return { ok: false, error: errorMessage(error) };
  }
}

async function sendRawMime(binding: EmailBinding, raw: string): Promise<SendResult> {
  try {
    const { EmailMessage } = (await import("cloudflare:email")) as {
      EmailMessage: new (from: string, to: string, raw: string) => unknown;
    };
    return await trySend(binding, new EmailMessage(NOTIFY_FROM, NOTIFY_TO, raw));
  } catch (error) {
    console.error("notify raw mime failed", error);
    return { ok: false, error: errorMessage(error) };
  }
}

async function sendMimeText(
  binding: EmailBinding,
  subscriber: string,
  text: string,
): Promise<SendResult> {
  try {
    const { EmailMessage } = (await import("cloudflare:email")) as {
      EmailMessage: new (from: string, to: string, raw: string) => unknown;
    };
    const msg = createMimeMessage();
    msg.setSender({ name: "mladenilic.art", addr: NOTIFY_FROM });
    msg.setRecipient(NOTIFY_TO);
    msg.setSubject(NOTIFY_SUBJECT);
    msg.setHeader("Reply-To", subscriber);
    msg.setHeader("Date", rfc5322Date());
    msg.setHeader("Message-ID", `<${crypto.randomUUID()}@mladenilic.art>`);
    msg.addMessage({ contentType: "text/plain", data: text });
    return await trySend(binding, new EmailMessage(NOTIFY_FROM, NOTIFY_TO, msg.asRaw()));
  } catch (error) {
    console.error("notify mimetext failed", error);
    return { ok: false, error: errorMessage(error) };
  }
}

function messageId(): string {
  const token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
  return `<notify.${token}@mladenilic.art>`;
}

function rawVariants(subscriber: string, text: string): string[] {
  const id = messageId();
  return [
    [
      `From: mladenilic.art <${NOTIFY_FROM}>`,
      `To: studio <${NOTIFY_TO}>`,
      `Message-ID: ${id}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain",
      "",
      text,
    ].join("\r\n"),
    [
      `From: ${NOTIFY_FROM}`,
      `To: ${NOTIFY_TO}`,
      `Reply-To: ${subscriber}`,
      `Subject: ${NOTIFY_SUBJECT}`,
      `Message-ID: ${id}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=utf-8",
      "",
      text,
    ].join("\r\n"),
    [
      `From: "mladenilic.art" <${NOTIFY_FROM}>`,
      `To: <${NOTIFY_TO}>`,
      `Reply-To: <${subscriber}>`,
      `Subject: ${NOTIFY_SUBJECT}`,
      `Date: ${rfc5322Date()}`,
      `Message-ID: ${id}`,
      "MIME-Version: 1.0",
      'Content-Type: text/plain; charset="utf-8"',
      "Content-Transfer-Encoding: 8bit",
      "",
      text,
      "",
    ].join("\r\n"),
  ];
}

function rfc5322Date(date = new Date()): string {
  return date.toUTCString().replace("GMT", "+0000");
}

function errorMessage(error: unknown): string {
  if (error && typeof error === "object") {
    const value = error as {
      message?: unknown;
      code?: unknown;
      name?: unknown;
      cause?: unknown;
    };
    const parts = [value.code, value.name, value.message]
      .filter((part) => part !== undefined && part !== null && part !== "")
      .map(String);
    if (value.cause !== undefined) {
      parts.push(`cause:${errorMessage(value.cause)}`);
    }
    if (parts.length > 0) return parts.join(" ");
  }
  return String(error);
}
