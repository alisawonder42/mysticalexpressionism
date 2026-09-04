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
      const sent = (await sendViaSite(address)) || (await sendViaFormSubmitAjax(address));
      setStatus(sent ? "sent" : "error");
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

  return (
    <form className="notify-form" onSubmit={onSubmit}>
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
          That could not be sent. Please try again.
        </p>
      ) : null}
    </form>
  );
}

async function sendViaSite(address: string): Promise<boolean> {
  try {
    const response = await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: address }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function sendViaFormSubmitAjax(address: string): Promise<boolean> {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: address,
      message: `${address} asked to be notified when new paintings become available.`,
      _subject: "Notify me of new paintings",
      _captcha: "false",
      _template: "table",
    }),
  });

  if (!response.ok) {
    return false;
  }

  const payload = (await response.json()) as {
    success?: string | boolean;
    message?: string;
  };
  if (payload.success === true || payload.success === "true") {
    return true;
  }
  const message = (payload.message ?? "").toLowerCase();
  return message.includes("activation") || message.includes("activate");
}
