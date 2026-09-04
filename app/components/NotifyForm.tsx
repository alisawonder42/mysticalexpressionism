"use client";

import { useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "saving" | "saved" | "error";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const address = email.trim();
    if (!EMAIL_PATTERN.test(address)) {
      setStatus("error");
      return;
    }

    setStatus("saving");
    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: address }),
      });
      const body = (await response.json().catch(() => null)) as { ok?: boolean } | null;
      setStatus(response.ok && body?.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "saved") {
    return (
      <p className="notify-status" role="status">
        You will be notified when new paintings and exhibitions become available.
      </p>
    );
  }

  return (
    <form className="notify-form" onSubmit={onSubmit} action="/api/notify" method="post">
      <label className="notify-label">
        <span>Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="your@email.com"
        />
      </label>
      <button className="button" type="submit" disabled={status === "saving"}>
        {status === "saving" ? "Saving…" : "Notify"}
      </button>
      {status === "error" ? (
        <p className="notify-status notify-error" role="alert">
          Could not save your email. Please try again.
        </p>
      ) : null}
    </form>
  );
}
