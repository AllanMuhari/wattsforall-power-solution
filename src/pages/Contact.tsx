import { Mail } from "lucide-react";
import { SiteForm } from "@/components/SiteForms";
import { Eyebrow, PageIntro } from "@/components/SitePrimitives";

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let’s start with a hello." copy="Have a question, an old battery, a partnership idea or a story to share? Send us a note and we’ll take it from there." />
      <section className="section section--paper"><div className="site-width contact-layout">
        <SiteForm />
        <aside className="contact-sidebar">
          <div className="contact-card"><Eyebrow>Reach us directly</Eyebrow><a className="contact-detail" href="mailto:wattsforall.ke@gmail.com"><span><Mail size={19} aria-hidden="true" /></span><div><strong>Email</strong><small>wattsforall.ke@gmail.com</small></div></a></div>
          <div className="contact-card"><Eyebrow>A helpful first message</Eyebrow><p>Tell us what you’re hoping to do and the best way to continue the conversation.</p><p className="form-hint">For battery enquiries, include the battery type, condition if known and your general area. Please wait for handling advice before moving or shipping it.</p></div>
        </aside>
      </div></section>
    </>
  );
}
