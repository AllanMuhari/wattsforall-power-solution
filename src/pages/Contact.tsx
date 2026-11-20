import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SiteForm } from "@/components/SiteForms";
import { Eyebrow, PageIntro } from "@/components/SitePrimitives";

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let’s start with a hello." copy="Have a question, an old battery, a partnership idea or a story to share? Send us a note and we’ll take it from there." aside={<p>Real conversations, clear next steps. No automated sales funnels or payment forms.</p>} />
      <section className="section section--paper"><div className="site-width contact-layout">
        <SiteForm />
        <aside className="contact-sidebar">
          <div className="contact-card"><Eyebrow>Reach us directly</Eyebrow><a className="contact-detail" href="mailto:wattsforall.ke@gmail.com"><span><Mail size={19} /></span><div><strong>Email</strong><small>wattsforall.ke@gmail.com</small></div></a><div className="contact-detail contact-detail--muted"><span><Phone size={19} /></span><div><strong>Phone</strong><small>[Add a confirmed phone number]</small></div></div><div className="contact-detail contact-detail--muted"><span><MapPin size={19} /></span><div><strong>Location</strong><small>[Add confirmed office or service area]</small></div></div></div>
          <div className="contact-card"><Eyebrow>Follow along</Eyebrow><p>Share a story or follow our work through the official WattsForAll channels.</p><div className="contact-socials"><span><Linkedin size={18} aria-hidden="true" /> LinkedIn</span><span><Instagram size={18} aria-hidden="true" /> Instagram</span></div><p className="form-hint">Official profile links will be added once verified.</p></div>
          <div className="contact-map"><div className="map-placeholder"><MapPin size={30} /><strong>Map placeholder</strong><p>Add an approved address or service area before embedding a map.</p></div></div>
        </aside>
      </div></section>
    </>
  );
}
