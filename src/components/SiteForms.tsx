import { useState, type FormEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";

const CONTACT_EMAIL = "wattsforall.ke@gmail.com";

type SiteFormProps = { mode?: "contact" | "interest"; initialType?: string };

export function SiteForm({ mode = "contact", initialType = "General enquiry" }: SiteFormProps) {
  const [draftUrl, setDraftUrl] = useState("");
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const isInterest = mode === "interest";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("error");
      form.reportValidity();
      return;
    }

    const values = new FormData(form);
    const subject = String(values.get("enquiry") || initialType);
    const body = [
      `Name: ${values.get("name") || ""}`,
      `Email: ${values.get("email") || ""}`,
      `Phone: ${values.get("phone") || "Not provided"}`,
      `I'm interested in: ${values.get("enquiry") || initialType}`,
      "",
      String(values.get("message") || ""),
    ].join("\n");
    setDraftUrl(`mailto:${CONTACT_EMAIL}?${new URLSearchParams({ subject, body }).toString()}`);
    setStatus("success");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="section-heading">
        <p className="eyebrow">{isInterest ? "Start a conversation" : "Send a note"}</p>
        <h2>{isInterest ? "Let’s find a way to work together." : "We’d love to hear from you."}</h2>
        <p>Your message stays in your email app. Nothing is sent until you choose to send it.</p>
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" autoComplete="name" placeholder="Name" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="contact-phone">Phone <span>(optional)</span></label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+254…" />
        </div>
        <div className="form-field">
          <label htmlFor="contact-enquiry">I’m reaching out about</label>
          <select id="contact-enquiry" name="enquiry" defaultValue={initialType}>
            <option>General enquiry</option>
            <option>Battery donation or recycling</option>
            <option>Community partnership</option>
            <option>Funding a community</option>
            <option>Volunteering</option>
            <option>Press or speaking</option>
            {initialType !== "General enquiry" ? <option>{initialType}</option> : null}
          </select>
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="contact-message">Your message</label>
          <textarea id="contact-message" name="message" placeholder="Tell us a little about what you have in mind…" required />
        </div>
      </div>
      {status === "error" ? <p className="form-status form-status--error" role="alert">Please complete the required fields and check your email address.</p> : null}
      {status === "success" ? (
        <div className="form-status form-status--success" role="status">
          <strong>Your email draft is ready.</strong> Review it, then press send when you’re ready.
          <a className="inline-link" href={draftUrl}><Mail size={16} aria-hidden="true" /> Open email draft</a>
        </div>
      ) : null}
      <div className="button-row" style={{ marginTop: "1.25rem" }}>
        <button className="button button--secondary" type="submit">Prepare email <ArrowRight size={17} aria-hidden="true" /></button>
      </div>
      <p className="form-hint" style={{ marginTop: ".85rem" }}>Prefer email? <a className="inline-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
    </form>
  );
}

export function NewsletterForm() {
  const [isReady, setIsReady] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const email = new FormData(form).get("newsletter-email");
    const subject = "WattsForAll updates";
    const body = `Please add ${email} to the WattsForAll updates list.`;
    window.location.href = `mailto:${CONTACT_EMAIL}?${new URLSearchParams({ subject, body }).toString()}`;
    setIsReady(true);
  }
  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
      <input id="newsletter-email" name="newsletter-email" type="email" autoComplete="email" placeholder="Your email address" required />
      <button className="button button--primary" type="submit">Keep me posted <ArrowRight size={16} aria-hidden="true" /></button>
      <p className="newsletter-form__hint" aria-live="polite">{isReady ? "Your email app is opening. Nothing is sent until you press send." : "A small note when there’s something worth sharing. No spam."}</p>
    </form>
  );
}
