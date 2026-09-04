"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "../data/copy";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="notify-status" role="status">
        You will be notified when new paintings become available.
      </p>
    );
  }

  const fallback = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Notify me of new paintings",
  )}&body=${encodeURIComponent(
    `${email.trim() || "My email"} — please notify me when new paintings become available.`,
  )}`;

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
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Notify"}
      </button>
      {status === "error" ? (
        <p className="notify-status" role="alert">
          That could not be sent automatically.{" "}
          <a href={fallback}>Email Mladen instead</a>
          .
        </p>
      ) : null}
    </form>
  );
}
