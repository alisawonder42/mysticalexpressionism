import { CONTACT_EMAIL } from "../../data/copy";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const email = await readEmail(request);
  if (!email || !EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const sent = await sendViaCloudflare(email);
  return Response.json({ ok: sent }, { status: sent ? 200 : 502 });
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

    const from = "notify@mladenilic.art";
    const text = [
      `${subscriber} asked to be notified when new paintings become available.`,
      "",
      "Reply to this message to reach them.",
    ].join("\n");
    const raw = [
      `From: "mladenilic.art" <${from}>`,
      `To: ${CONTACT_EMAIL}`,
      `Reply-To: ${subscriber}`,
      "Subject: Notify me of new paintings",
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=utf-8",
      "",
      text,
    ].join("\r\n");

    await env.NOTIFY_EMAIL.send(new EmailMessage(from, CONTACT_EMAIL, raw));
    return true;
  } catch {
    return false;
  }
}
