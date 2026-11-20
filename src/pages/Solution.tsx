import { BatteryCharging, Lightbulb, Radio, Smartphone, Zap } from "lucide-react";
import powerPhoto from "@/assets/hero-bg.jpg";
import { ActionLink, Eyebrow, PageIntro, PhotoFigure, PlaceholderLabel, SectionHeading } from "@/components/SitePrimitives";

const solutions = [
  { icon: Lightbulb, title: "Light for home", label: "Households", description: "A portable option for essential lights and phone charging, sized to a household’s needs.", powers: "[Number] lights · [Number] phone charges", runtime: "[Verified hours]", capacity: "[Verified capacity]" },
  { icon: Zap, title: "Power for a small business", label: "Kiosks & workspaces", description: "A practical power source for the small tools and devices a local business depends on.", powers: "[Supported devices]", runtime: "[Verified hours]", capacity: "[Verified capacity]" },
  { icon: Radio, title: "Stay connected", label: "Community use", description: "Portable power for communication and other agreed community priorities.", powers: "[Radio, phone or agreed use]", runtime: "[Verified hours]", capacity: "[Verified capacity]" },
];

export default function Solution() {
  return (
    <>
      <PageIntro eyebrow="Solutions" title="Power designed around real life." copy="Portable power solutions for the small, essential things that help a home or business keep going—shaped around what people actually need." aside={<p>Products shown here are a design framework. Add confirmed pack names, tested specs, prices and safety information before publishing a product offer.</p>} />
      <section className="section section--paper"><div className="site-width split">
        <div className="split__copy"><Eyebrow>Useful before impressive</Eyebrow><h2>Start with the question: what needs power?</h2><p>It could be a light at home, a phone for the next day or a small business tool. Start with the routine, then choose a solution that fits.</p><div className="tag-row"><span className="tag"><Lightbulb size={14} /> Lighting</span><span className="tag"><Smartphone size={14} /> Phones</span><span className="tag"><Radio size={14} /> Radios</span></div><ActionLink to="/contact" variant="secondary">Tell us what you need</ActionLink></div>
        <PhotoFigure src={powerPhoto} alt="A person holding a phone in the warm light beside a solar panel" caption="Power in the context of everyday life." note="Photo direction: real use, not a product render" />
      </div></section>
      <section className="section"><div className="site-width"><SectionHeading eyebrow="A starting point" title="Each solution has a person in mind.">Choose a product around its intended use. Every figure in brackets needs to be replaced with a verified value before it’s shared.</SectionHeading>
        <div className="solution-list">{solutions.map(({ icon: Icon, title, label, description, powers, runtime, capacity }) => <article className="product-detail" key={title}>
          <div className="product-detail__intro"><div className="card-icon"><Icon size={24} aria-hidden="true" /></div><span className="tag">{label}</span><h3>{title}</h3><p>{description}</p><PlaceholderLabel>Product image placeholder — show it in real use</PlaceholderLabel></div>
          <div className="product-detail__specs"><h4>Helpful details</h4><table className="spec-table"><tbody><tr><th scope="row">Designed to power</th><td>{powers}</td></tr><tr><th scope="row">Typical runtime</th><td>{runtime}</td></tr><tr><th scope="row">Capacity</th><td>{capacity}</td></tr><tr><th scope="row">Safety & warranty</th><td>[Confirmed policy]</td></tr></tbody></table><div className="button-row"><ActionLink to="/contact" variant="outline">Request this solution</ActionLink></div></div>
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
