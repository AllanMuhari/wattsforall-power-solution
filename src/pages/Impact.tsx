import { ArrowRight, Download, MapPin, Recycle, Sun, UsersRound } from "lucide-react";
import communityPhoto from "@/assets/fridah.jpeg";
import workPhoto from "@/assets/wangari.jpeg";
import { PublicContext } from "@/components/sections/PublicContext";
import { ActionLink, Eyebrow, PageIntro, PlaceholderLabel, SectionHeading } from "@/components/SitePrimitives";

const impactMeasures = ["Households reached", "Lithium e-waste diverted", "CO₂ avoided", "Local skills supported"];

export default function Impact() {
  return (
    <>
      <PageIntro eyebrow="Impact" title="The difference is in the details." copy="Energy access, responsible material recovery and local skills belong in the same picture. We’ll share the story as results are measured and verified." aside={<p>All figures, locations, quotes and partner names are placeholders until WattsForAll confirms them.</p>} />
      <section className="section section--paper"><div className="site-width"><SectionHeading eyebrow="A transparent snapshot" title="Real progress, reported honestly.">These measures are ready for verified figures and clear methodology. No estimates presented as fact.</SectionHeading>
        <div className="stat-grid">{impactMeasures.map((label, index) => { const icons = [Sun, Recycle, ArrowRight, UsersRound]; const Icon = icons[index]; return <article className="stat-card" key={label}><div className="card-icon"><Icon size={20} aria-hidden="true" /></div><strong className="stat-card__value">[X]</strong><span className="stat-card__label">{label}</span><PlaceholderLabel>Figure and method to be confirmed</PlaceholderLabel></article>; })}</div>
      </div></section>
      <PublicContext />
      <section className="section"><div className="site-width split"><div className="split__copy"><Eyebrow>Community reach</Eyebrow><h2>Show where the work happens—with care.</h2><p>Add a map only after communities have approved how their location is shared. The point is to show real reach, not to expose people or overstate coverage.</p><PlaceholderLabel>Map, approved locations and accessible description to come</PlaceholderLabel></div>
        <div className="map-placeholder"><MapPin size={34} aria-hidden="true" /><strong>Community map placeholder</strong><p>[Add confirmed location(s), with permission and a text alternative.]</p></div>
      </div></section>
      <section className="section section--sage"><div className="site-width"><SectionHeading eyebrow="People behind the work" title="The people turning ideas into action.">Our Story highlights the people shaping WattsForAll. Their work brings strategy, clean energy, and circular innovation into focus while community outcomes continue to be verified.</SectionHeading>
        <div className="impact-stories">
          <article className="impact-story"><div className="impact-story__image"><img src={communityPhoto} alt="Portrait of Fridah Kamau, Founder and Project Lead" loading="lazy" /></div><div className="impact-story__copy"><span className="tag">Founder &amp; Project Lead</span><h3>Clean energy and circular innovation.</h3><p>With a background in civil and environmental engineering, Fridah leads WattsForAll’s vision, impact strategy, partnerships, and overall direction.</p></div></article>
          <article className="impact-story impact-story--reverse"><div className="impact-story__image"><img src={workPhoto} alt="Portrait of Wangari Kimani, Operations and Strategy Lead" loading="lazy" /></div><div className="impact-story__copy"><span className="tag">Operations &amp; Strategy Lead</span><h3>Helping ideas become action.</h3><p>Wangari plays a key role in shaping the strategic direction and day-to-day operations of WattsForAll. She supports project planning, coordination, and execution, helping translate ideas into actionable steps on the ground.</p></div></article>
        </div>
      </div></section>
      <section className="section section--paper"><div className="site-width split"><div className="split__copy"><Eyebrow>What changes, and how we count it</Eyebrow><h2>A good report says how it knows.</h2><p>For each number, show the time period, source, what is included and what is not. Keep the method understandable to the people represented by the number.</p><ul className="check-list"><li><ArrowRight size={18} />Define how a household or product is counted.</li><li><ArrowRight size={18} />Explain the method behind any CO₂ estimate.</li><li><ArrowRight size={18} />Share the limits alongside the results.</li></ul></div>
        <div className="report-placeholder"><div className="card-icon"><Download size={23} /></div><span className="tag">Report placeholder</span><h3>Impact report</h3><p>[Add the approved report title, date and accessible file.]</p><button className="button button--outline" type="button" disabled aria-disabled="true">Available when ready</button></div>
      </div></section>
      <section className="section section--forest"><div className="site-width"><div className="home-cta"><div><Eyebrow>Help shape what comes next</Eyebrow><h2>Power a story that can be measured.</h2><p>Partner, volunteer or help fund a community-led pilot.</p></div><ActionLink to="/get-involved" variant="primary">Get involved</ActionLink></div></div></section>
    </>
  );
}
