import { ArrowDown, ArrowRight, BatteryCharging, CircleHelp, HandHeart, Recycle, Sun, Zap } from "lucide-react";
import heroPhoto from "@/assets/hero-bg.jpg";
import wastePhoto from "@/assets/problem-ewaste.jpg";
import { ActionLink, Eyebrow, PhotoFigure, PlaceholderLabel, SectionHeading } from "@/components/SitePrimitives";

const steps = [
  { icon: Recycle, title: "Collect", copy: "Give useful battery materials a responsible next step." },
  { icon: CircleHelp, title: "Test & restore", copy: "Review what can be reused. Set aside what cannot." },
  { icon: BatteryCharging, title: "Build for everyday", copy: "Shape suitable cells into portable power for daily needs." },
  { icon: Sun, title: "Share the light", copy: "Connect people and local partners with a practical solution." },
];

const stats = ["Households powered", "E-waste diverted", "CO₂ avoided", "Skills and jobs supported"];

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
          <figure className="home-hero__visual">
            <div className="home-hero__image photo-frame">
              <img src={heroPhoto} alt="Hands holding a phone beside a solar panel in warm evening light" fetchPriority="high" />
              <span className="photo-tag">Visual note: everyday energy</span>
            </div>
            <figcaption className="home-hero__caption"><span className="home-hero__sun"><Sun size={20} aria-hidden="true" /></span><span><strong>Small changes carry far.</strong><br />Power for the moments that make a day.</span></figcaption>
            <span className="home-hero__orbit" aria-hidden="true" />
          </figure>
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
          <PhotoFigure src={wastePhoto} alt="Illustrative view of discarded phones and electronic devices" caption="A difficult material story, told with care." note="Illustrative e-waste image" />
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
            <Eyebrow>Stories belong to the people who live them</Eyebrow>
            <h2>More light at home. More possibility after dark.</h2>
            <p>We want every story to start with a real voice, shared with care and permission. This space is ready for a community member’s words, a portrait they have approved, and an outcome the team can verify.</p>
            <ActionLink to="/impact" variant="secondary">Read community stories</ActionLink>
          </div>
          <figure className="story-photo-placeholder">
            <img src={heroPhoto} alt="Placeholder image of a person using a phone near a solar panel at dusk" loading="lazy" />
            <span className="story-photo-placeholder__flag">Community story photo placeholder</span>
            <figcaption><strong>[Community member’s words, with consent]</strong><span>[Name, community and verified outcome to be added]</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--paper">
        <div className="site-width">
          <SectionHeading eyebrow="A little goes a long way" title="The numbers will tell the real story.">We’ll share measured results here as they’re verified. No guesses, no inflated promises.</SectionHeading>
          <div className="stat-grid">{stats.map((label) => <article className="stat-card" key={label}><strong className="stat-card__value">[X]</strong><span className="stat-card__label">{label}</span><PlaceholderLabel>Verified figure to be added</PlaceholderLabel></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="site-width">
          <SectionHeading eyebrow="Power that meets the moment" title="Made for the small, essential things.">A starting point for solutions designed around real routines—not product specs alone.</SectionHeading>
          <div className="card-grid">
            <article className="solution-card"><div className="card-icon"><Sun size={22} aria-hidden="true" /></div><span className="tag">For households</span><h3>Light & charge</h3><p>Portable power for lights, phones and radios when the grid is out of reach.</p><PlaceholderLabel>Pack name and verified runtime to come</PlaceholderLabel><ActionLink to="/solution" variant="text">Explore solutions</ActionLink></article>
            <article className="solution-card"><div className="card-icon"><Zap size={22} aria-hidden="true" /></div><span className="tag">For small businesses</span><h3>Keep the day moving</h3><p>Power options shaped around the everyday needs of a kiosk, stall or workspace.</p><PlaceholderLabel>Pack name and supported devices to come</PlaceholderLabel><ActionLink to="/solution" variant="text">See who it’s for</ActionLink></article>
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
          <div className="partner-heading"><div><Eyebrow>Good work takes a community</Eyebrow><h2>There’s room in the circle for you.</h2></div><ActionLink to="/get-involved" variant="text">Meet us halfway</ActionLink></div>
          <div className="brand-strip">{[1, 2, 3, 4].map((item) => <div className="partner-card" key={item}>Partner logo placeholder</div>)}</div>
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
