import { CONTACT_EMAIL } from "../data/copy";

type Props = {
  nextUrl: string;
  sent?: boolean;
};

export function NotifyForm({ nextUrl, sent = false }: Props) {
  if (sent) {
    return (
      <p className="notify-status" role="status">
        You will be notified when new paintings become available.
      </p>
    );
  }

  return (
    <form
      className="notify-form"
      action={`https://formsubmit.co/${CONTACT_EMAIL}`}
      method="POST"
    >
      <input type="hidden" name="_subject" value="Notify me of new paintings" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input
        type="hidden"
        name="message"
        value="This person asked to be notified when new paintings become available."
      />
      <label className="notify-label">
        <span>Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="your@email.com"
        />
      </label>
      <button className="button" type="submit">
        Notify
      </button>
    </form>
  );
}
