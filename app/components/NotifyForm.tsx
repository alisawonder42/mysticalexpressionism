"use client";

import { useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTIFY_TO = "mysticalexpressionismpaintings@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

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

    setStatus("sending");
    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: address }),
      });
      if (response.ok) {
        setStatus("sent");
        return;
      }
    } catch {
      // Fall through to the collector mailbox.
    }

    window.location.href = mailtoFor(address);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="notify-status" role="status">
        Your address was sent to {NOTIFY_TO}.
      </p>
    );
  }

  return (
    <form
      className="notify-form"
      onSubmit={onSubmit}
      action={`mailto:${NOTIFY_TO}`}
      method="post"
      encType="text/plain"
    >
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
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Notify"}
      </button>
    </form>
  );
}

function mailtoFor(address: string): string {
  const subject = encodeURIComponent("Notify me of new paintings");
  const body = encodeURIComponent(
    `${address} asked to be notified when new paintings become available.`,
  );
  return `mailto:${NOTIFY_TO}?subject=${subject}&body=${body}`;
}
