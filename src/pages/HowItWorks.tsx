import { ArrowRight, BatteryCharging, ClipboardCheck, Handshake, Recycle, ShieldCheck, Sun } from "lucide-react";
import { ActionLink, Eyebrow, PageIntro, SectionHeading } from "@/components/SitePrimitives";

const steps = [
  { icon: Recycle, title: "Collect with care", copy: "People and organisations can tell us what they have. We’ll confirm what we can accept and where it can go." },
  { icon: ClipboardCheck, title: "Check every battery", copy: "A trained person reviews its condition against a documented screening process. If it isn’t suitable, it doesn’t move on to reuse." },
  { icon: BatteryCharging, title: "Build only what’s fit", copy: "Suitable cells can be assembled into portable packs designed around a clear use, with the right checks along the way." },
  { icon: Sun, title: "Deliver with local partners", copy: "Talk with the people who will use the power, then agree on practical support and a route for questions afterward." },
];

const faqs = [
  { question: "Are second-life batteries safe?", answer: "A battery’s past use matters. Reuse is only appropriate when each cell meets the documented screening and safety checks for its intended use. The team will share its specific test steps and applicable standards once confirmed; a battery that fails must not be reused." },
  { question: "What happens to batteries that cannot be reused?", answer: "They should be kept out of general waste and sent to an appropriate, approved recovery or recycling route. Contact the team for local handling and drop-off guidance before moving or shipping a battery." },
  { question: "How do you decide what a power pack should run?", answer: "Start with the person’s everyday needs—such as light, phone charging or a radio—then match those needs to a pack’s verified capacity and runtime. Publish product-specific figures only after testing." },
  { question: "Can I donate old batteries?", answer: "Yes, get in touch before bringing or shipping anything. Share the battery type, condition if known and your general area so the team can confirm whether it can be accepted and how to handle it." },
];

export default function HowItWorks() {
  return (
    <>
      <PageIntro eyebrow="How It Works" title="A careful journey from used to useful." copy="A plain-language look at how e-waste can become portable power—with people, safety and responsible recovery in the loop." aside={<p>Not every battery is reusable. Careful screening—and a responsible plan for what comes next—are part of the process, not footnotes.</p>} />
      <section className="section section--paper">
        <div className="site-width"><SectionHeading eyebrow="The journey" title="Four steps, with care at every turn.">The process should be easy to understand for the person donating, the technician rebuilding, and the person using the power.</SectionHeading>
          <div className="process-grid">{steps.map(({ icon: Icon, title, copy }, index) => <article className="process-card" key={title}><span className="step-card__number">0{index + 1}</span><div className="card-icon"><Icon size={22} aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="site-width split">
          <div className="split__copy"><Eyebrow>Safety is a practice</Eyebrow><h2>Second life only makes sense when it’s a safe one.</h2><p>Battery cells are not interchangeable, and age alone doesn’t tell the whole story. Their condition, handling and intended use all matter.</p><ul className="check-list"><li><ShieldCheck size={18} />Screen each cell against a documented, approved process.</li><li><ShieldCheck size={18} />Keep cells that fail or raise questions out of reuse.</li><li><ShieldCheck size={18} />Use product-specific instructions and clear support guidance.</li></ul><p className="form-hint">The team will share its confirmed testing steps, standards and handling guidance directly.</p></div>
          <div className="safety-panel"><div className="safety-panel__icon"><ShieldCheck size={34} aria-hidden="true" /></div><h3>Tested before it’s trusted.</h3><p>Safety checks come before reuse. Technical details are shared only when the process is confirmed.</p></div>
        </div>
      </section>
      <section className="section section--sage">
        <div className="site-width"><SectionHeading eyebrow="Beyond delivery" title="Support is part of a useful solution.">Keep the path open for people to ask a question, report a problem or get help using a pack.</SectionHeading>
          <div className="card-grid"><article className="story-card"><div className="card-icon"><Handshake size={22} /></div><h3>Local handover</h3><p>Explain the pack in everyday language, share safe-use instructions and confirm who to contact.</p></article><article className="story-card"><div className="card-icon"><Sun size={22} /></div><h3>Check in</h3><p>Use a partner-approved follow-up to understand what works and what needs to change.</p></article><article className="story-card"><div className="card-icon"><Recycle size={22} /></div><h3>Plan the next step</h3><p>Share a clear route for a pack or battery that reaches the end of its usable life.</p></article></div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="site-width split split--reverse">
          <div className="split__copy"><Eyebrow>Keep the loop open</Eyebrow><h2>Reuse what is suitable. Recycle what is not.</h2><p>Making a product is one part of a circular approach. The next part is knowing how to handle it responsibly when its useful life is over.</p><ActionLink to="/get-involved#recycle" variant="secondary">Ask about battery drop-off</ActionLink></div>
          <div className="recovery-loop"><div className="recovery-loop__node"><Recycle size={27} /><strong>Collected</strong></div><ArrowRight /><div className="recovery-loop__node"><ClipboardCheck size={27} /><strong>Checked</strong></div><ArrowRight /><div className="recovery-loop__node"><BatteryCharging size={27} /><strong>Put to use</strong></div><p>Not suitable for reuse? Follow the confirmed recovery route for your area.</p></div>
        </div>
      </section>
      <section className="section"><div className="site-width"><SectionHeading eyebrow="Questions, answered simply" title="Good questions make good energy work." /><div className="faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
      <section className="section section--forest"><div className="site-width"><div className="home-cta"><div><Eyebrow>Want to know more?</Eyebrow><h2>Let’s talk through what you have in mind.</h2><p>Ask about donating a battery, requesting a solution or building a local partnership.</p></div><ActionLink to="/contact" variant="primary">Talk to our team</ActionLink></div></div></section>
    </>
  );
}
