const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type KvNamespace = {
  put: (key: string, value: string) => Promise<void>;
};

export async function POST(request: Request) {
  const email = await readEmail(request);
  if (!email || !EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false, error: "invalid email" }, { status: 400 });
  }

  const saved = await saveSubscriber(email);
  return Response.json(
    { ok: saved },
    {
      status: saved ? 200 : 500,
      headers: { "Cache-Control": "no-store" },
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

async function saveSubscriber(email: string): Promise<boolean> {
  try {
    const { env } = (await import("cloudflare:workers")) as {
      env: { NOTIFY_SUBSCRIBERS?: KvNamespace };
    };
    const kv = env.NOTIFY_SUBSCRIBERS;
    if (!kv) return false;

    const createdAt = new Date().toISOString();
    await kv.put(
      `email:${email.toLowerCase()}`,
      JSON.stringify({ email, createdAt }),
    );
    return true;
  } catch (error) {
    console.error("notify save failed", error);
    return false;
  }
}
