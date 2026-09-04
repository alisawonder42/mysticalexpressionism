import { createMimeMessage } from "mimetext/browser";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_TO = "mysticalexpressionismpaintings@gmail.com";
const NOTIFY_FROM = "notify@mladenilic.art";

type EmailBinding = {
  send: (message: unknown) => Promise<void>;
};

export async function POST(request: Request) {
  const email = await readEmail(request);
  if (!email || !EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const result = await sendNotice(email);
  return Response.json(
    { ok: result.ok },
    { status: result.ok ? 200 : 502 },
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

async function sendNotice(subscriber: string): Promise<{ ok: boolean; error?: string }> {
  const text = `${subscriber} asked to be notified when new paintings become available.`;

  const binding = await getEmailBinding();
  if (binding) {
    const structured = await trySend(binding, {
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      replyTo: subscriber,
      subject: "Notify me of new paintings",
      text,
    });
    if (structured.ok) return structured;

    const mime = await sendMime(binding, subscriber, text);
    if (mime.ok) return mime;
  }

  return { ok: false, error: "email binding unavailable" };
}

async function getEmailBinding(): Promise<EmailBinding | null> {
  try {
    const { env } = (await import("cloudflare:workers")) as {
      env: { NOTIFY_EMAIL?: EmailBinding };
    };
    return env.NOTIFY_EMAIL ?? null;
  } catch {
    return null;
  }
}

async function trySend(binding: EmailBinding, message: unknown): Promise<{ ok: boolean; error?: string }> {
  try {
    await binding.send(message);
    return { ok: true };
  } catch (error) {
    console.error("notify send failed", error);
    return { ok: false, error: errorMessage(error) };
  }
}

async function sendMime(
  binding: EmailBinding,
  subscriber: string,
  text: string,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const { EmailMessage } = (await import("cloudflare:email")) as {
      EmailMessage: new (from: string, to: string, raw: string) => unknown;
    };
    const msg = createMimeMessage();
    msg.setSender({ name: "mladenilic.art", addr: NOTIFY_FROM });
    msg.setRecipient(NOTIFY_TO);
    msg.setSubject("Notify me of new paintings");
    msg.setHeader("Reply-To", subscriber);
    msg.addMessage({ contentType: "text/plain", data: text });
    return await trySend(binding, new EmailMessage(NOTIFY_FROM, NOTIFY_TO, msg.asRaw()));
  } catch (error) {
    console.error("notify mime failed", error);
    return { ok: false, error: errorMessage(error) };
  }
}

function errorMessage(error: unknown): string {
  if (error && typeof error === "object" && "message" in error) {
    return String((error as { message: unknown }).message);
  }
  return String(error);
}
