import { BatteryCharging, Lightbulb, Radio, Smartphone, Zap } from "lucide-react";
import powerPhoto from "@/assets/hero-bg.jpg";
import { ActionLink, Eyebrow, PageIntro, PhotoFigure, SectionHeading } from "@/components/SitePrimitives";

const solutions = [
  { icon: Lightbulb, title: "Light for home", label: "Households", description: "Start with the lighting and phone-charging needs that matter in a household’s everyday routine." },
  { icon: Zap, title: "Power for a small business", label: "Kiosks & workspaces", description: "Explore the tools and devices a local business needs to keep its day moving." },
  { icon: Radio, title: "Stay connected", label: "Community use", description: "Discuss portable power for communication and other community priorities." },
];

export default function Solution() {
  return (
    <>
      <PageIntro eyebrow="Solutions" title="Power designed around real life." copy="Portable power solutions for the small, essential things that help a home or business keep going—shaped around what people actually need." aside={<p>Pack names, tested specifications, pricing and safety details will be shared once confirmed. Talk with the team about your needs in the meantime.</p>} />
      <section className="section section--paper"><div className="site-width split">
        <div className="split__copy"><Eyebrow>Useful before impressive</Eyebrow><h2>Start with the question: what needs power?</h2><p>It could be a light at home, a phone for the next day or a small business tool. Start with the routine, then choose a solution that fits.</p><div className="tag-row"><span className="tag"><Lightbulb size={14} /> Lighting</span><span className="tag"><Smartphone size={14} /> Phones</span><span className="tag"><Radio size={14} /> Radios</span></div><ActionLink to="/contact" variant="secondary">Tell us what you need</ActionLink></div>
        <PhotoFigure src={powerPhoto} alt="A person holding a phone in the warm light beside a solar panel" caption="Power in the context of everyday life." note="Everyday energy" />
      </div></section>
      <section className="section"><div className="site-width"><SectionHeading eyebrow="Needs before products" title="Start with the person and the purpose.">These are conversation starters, not ready-to-buy product offers. Product specifications will be shared after testing and confirmation.</SectionHeading>
        <div className="card-grid">{solutions.map(({ icon: Icon, title, label, description }) => <article className="solution-card" key={title}>
          <div className="card-icon"><Icon size={24} aria-hidden="true" /></div><span className="tag">{label}</span><h3>{title}</h3><p>{description}</p><ActionLink to="/contact" variant="outline">Talk about this need</ActionLink>
        </article>)}</div>
      </div></section>
      <section className="section section--sage"><div className="site-width split">
        <div className="split__copy"><Eyebrow>Good fit comes from good questions</Eyebrow><h2>Not sure which one is right?</h2><p>Tell us who needs power and what they hope to run. We’ll start with a conversation—not a checkout screen.</p><ul className="check-list"><li><BatteryCharging size={18} />What needs to stay powered?</li><li><Smartphone size={18} />How often and for how long?</li><li><Zap size={18} />What support will make it useful over time?</li></ul><ActionLink to="/contact" variant="secondary">Request a conversation</ActionLink></div>
        <div className="solution-note"><h3>A note on product details</h3><p>Runtime, capacity, pricing, warranties and availability vary by pack and should only appear after the relevant testing and approvals are complete.</p><span className="tag">No checkout. Enquiry-led.</span></div>
      </div></section>
      <section className="section"><div className="site-width"><SectionHeading eyebrow="For organisations" title="Build a solution with the people who will use it.">We can explore a pilot or partnership together. Share your community’s priorities, existing infrastructure and support needs.</SectionHeading><ActionLink to="/get-involved#partner" variant="primary">Explore a partnership</ActionLink></div></section>
    </>
  );
}
