import { ArrowDown, ArrowRight, BatteryCharging, CircleHelp, HandHeart, Recycle, Sun, Trophy, Zap } from "lucide-react";
import fridahPhoto from "@/assets/fridah.jpeg";
import wastePhoto from "@/assets/ewaste-recovery.png";
import { ActionLink, Eyebrow, PhotoFigure, SectionHeading } from "@/components/SitePrimitives";

const steps = [
  { icon: Recycle, title: "Collect", copy: "Give useful battery materials a responsible next step." },
  { icon: CircleHelp, title: "Test & restore", copy: "Review what can be reused. Set aside what cannot." },
  { icon: BatteryCharging, title: "Build for everyday", copy: "Shape suitable cells into portable power for daily needs." },
  { icon: Sun, title: "Share the light", copy: "Connect people and local partners with a practical solution." },
];

export default function Index() {
  return (
    <>
      <section className="home-hero">
        <div className="site-width home-hero__grid">
          <div className="home-hero__copy">
            <Eyebrow>People first. Power for everyone.</Eyebrow>
            <h1>A second life for batteries. A brighter one for everyone.</h1>
            <p>WattsForAll transforms discarded lithium batteries into affordable, portable power for underserved communities. Clean energy access for everyone, powered by circular innovation.</p>
            <div className="button-row">
              <ActionLink to="/how-it-works" variant="secondary">See how it works</ActionLink>
              <ActionLink to="/get-involved" variant="outline">Support our mission</ActionLink>
            </div>
            <span className="home-hero__note"><ArrowDown size={15} aria-hidden="true" /> Turning e-waste into clean power for off-grid communities</span>
          </div>

        </div>
      </section>

      <section className="section section--paper">
        <div className="site-width split">
          <div className="split__copy">
            <Eyebrow>Two challenges. One thoughtful loop.</Eyebrow>
            <h2>What we throw away can help power what comes next.</h2>
            <p>Usable lithium batteries are often treated as waste, while households and small businesses can still face gaps in reliable electricity. WattsForAll works at the point where those stories meet: recovering what can be used and turning it into portable power.</p>
            <ActionLink to="/about" variant="text">Meet WattsForAll</ActionLink>
          </div>
          <PhotoFigure src={wastePhoto} alt="Illustrative view of a technician sorting discarded phones and electronics at a recovery workbench" caption="A difficult material story, told with care." note="E-waste recovery" />
        </div>
      </section>

      <section className="section">
        <div className="site-width">
          <SectionHeading eyebrow="A simple, people-centred journey" title="From overlooked battery to useful everyday power.">The process is designed to be clear at every step. Safety and suitability come before reuse.</SectionHeading>
          <div className="step-grid">
            {steps.map(({ icon: Icon, title, copy }, index) => <article className="step-card" key={title}>
              <span className="step-card__number">0{index + 1}</span><div className="card-icon"><Icon size={22} aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p>
            </article>)}
          </div>
          <div className="home-steps-link"><ActionLink to="/how-it-works" variant="text">Explore the process</ActionLink></div>
        </div>
      </section>

      <section className="section section--sage">
        <div className="site-width split split--reverse">
          <div className="split__copy">
            <Eyebrow>People behind the work</Eyebrow>
            <h2>Meet the people leading WattsForAll.</h2>
            <p>Founder and Project Lead Fridah Kamau leads the vision, impact strategy and partnerships behind WattsForAll’s work.</p>
            <ActionLink to="/about" variant="secondary">Meet the team</ActionLink>
          </div>
          <PhotoFigure src={fridahPhoto} alt="Portrait of Fridah Kamau, Founder and Project Lead" caption="Fridah Kamau, Founder and Project Lead." />
        </div>
      </section>

      <section className="section">
        <div className="site-width">
          <SectionHeading eyebrow="Power that meets the moment" title="Made for the small, essential things.">A starting point for solutions designed around real routines—not product specs alone.</SectionHeading>
          <div className="card-grid">
            <article className="solution-card"><div className="card-icon"><Sun size={22} aria-hidden="true" /></div><span className="tag">For households</span><h3>Light & charge</h3><p>Portable power for lights, phones and radios when the grid is out of reach.</p><ActionLink to="/solution" variant="text">Explore solutions</ActionLink></article>
            <article className="solution-card"><div className="card-icon"><Zap size={22} aria-hidden="true" /></div><span className="tag">For small businesses</span><h3>Keep the day moving</h3><p>Power options shaped around the everyday needs of a kiosk, stall or workspace.</p><ActionLink to="/solution" variant="text">See who it’s for</ActionLink></article>
            <article className="solution-card"><div className="card-icon"><HandHeart size={22} aria-hidden="true" /></div><span className="tag">For partners</span><h3>Build a local pathway</h3><p>Work with WattsForAll to understand a community’s needs before a solution is chosen.</p><ActionLink to="/get-involved#partner" variant="text">Start a conversation</ActionLink></article>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="site-width circular-section">
          <div className="circular-section__copy"><Eyebrow>A circular idea, made practical</Eyebrow><h2>Keep materials in use. Keep people at the centre.</h2><p>Each turn of the loop is a chance to use less, learn more and make energy access more thoughtful.</p><ActionLink to="/how-it-works" variant="text">Follow the loop</ActionLink></div>
          <div className="loop-diagram" aria-label="Circular journey from collected batteries to useful power and responsible recycling">
            <div className="loop-step"><span>01</span><Recycle size={25} /><strong>Collect</strong></div><ArrowRight className="loop-arrow" aria-hidden="true" />
            <div className="loop-step"><span>02</span><BatteryCharging size={25} /><strong>Restore</strong></div><ArrowRight className="loop-arrow" aria-hidden="true" />
            <div className="loop-step"><span>03</span><Sun size={25} /><strong>Power</strong></div>
            <div className="loop-return"><span>When a battery can’t be reused, send it to an appropriate recycling pathway.</span><ArrowRight size={15} aria-hidden="true" />Back to responsible recovery</div>
          </div>
        </div>
      </section>

      <section className="section section--small">
        <div className="site-width">
          <div className="recognition-layout">
            <div><Eyebrow>Recognition</Eyebrow><h2>Good work takes a community.</h2><p>WattsForAll received first place at Kenya’s 2026 Cleantech Innovation Competition for its clean-energy storage solution.</p><ActionLink to="/about" variant="text">Read about the recognition</ActionLink></div>
            <article className="award-card" aria-label="2026 Cleantech Innovation Competition recognition">
              <div className="award-card__top"><span className="award-card__icon"><Trophy size={23} aria-hidden="true" /></span><span className="award-card__date">Kenya · 2026</span></div>
              <span className="award-card__rank">1st place</span>
              <h3>Cleantech Innovation Competition</h3>
              <p>Recognising circular energy innovation using second-life EV batteries.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--forest">
        <div className="site-width"><div className="home-cta">
          <div><Eyebrow>There are many ways to take part</Eyebrow><h2>Bring a battery. Bring an idea. Bring your time.</h2><p>Donate suitable batteries, help a community explore a pilot, or lend your experience to the work.</p></div>
          <div className="button-row"><ActionLink to="/get-involved" variant="primary">See how to help</ActionLink><ActionLink to="/contact" variant="light">Talk with our team</ActionLink></div>
        </div></div>
      </section>
    </>
  );
}
