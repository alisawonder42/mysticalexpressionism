import { CONTACT_EMAIL } from "../../data/copy";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: string };
    email = (body.email ?? "").trim();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const sent = await sendNotice(email);
  return Response.json({ ok: sent }, { status: sent ? 200 : 502 });
}

async function sendNotice(subscriber: string): Promise<boolean> {
  if (await sendViaCloudflare(subscriber)) {
    return true;
  }
  return sendViaFormSubmit(subscriber);
}

async function sendViaCloudflare(subscriber: string): Promise<boolean> {
  try {
    const { env } = (await import("cloudflare:workers")) as {
      env: { NOTIFY_EMAIL?: { send: (message: unknown) => Promise<void> } };
    };
    if (!env.NOTIFY_EMAIL) {
      return false;
    }

    const { EmailMessage } = (await import("cloudflare:email")) as {
      EmailMessage: new (from: string, to: string, raw: string) => unknown;
    };
    const text = `${subscriber} asked to be notified when new paintings become available.`;
    const raw = [
      'From: "mladenilic.art" <notify@mladenilic.art>',
      `To: ${CONTACT_EMAIL}`,
      "Subject: Notify me of new paintings",
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=utf-8",
      "",
      text,
    ].join("\r\n");
    await env.NOTIFY_EMAIL.send(new EmailMessage("notify@mladenilic.art", CONTACT_EMAIL, raw));
    return true;
  } catch {
    return false;
  }
}

async function sendViaFormSubmit(subscriber: string): Promise<boolean> {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: subscriber,
      message: `${subscriber} asked to be notified when new paintings become available.`,
      _subject: "Notify me of new paintings",
      _captcha: "false",
      _template: "table",
    }),
  });

  if (!response.ok) {
    return false;
  }

  try {
    const payload = (await response.json()) as {
      success?: string | boolean;
      message?: string;
    };
    if (payload.success === true || payload.success === "true") {
      return true;
    }
    const message = (payload.message ?? "").toLowerCase();
    return message.includes("activation") || message.includes("activate");
  } catch {
    return false;
  }
}
