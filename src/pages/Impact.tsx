import { ArrowRight, Download, MapPin, Recycle, Sun, UsersRound } from "lucide-react";
import communityPhoto from "@/assets/fridah.jpeg";
import workPhoto from "@/assets/keith.jpg";
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
      <section className="section section--sage"><div className="site-width"><SectionHeading eyebrow="The impact in people’s words" title="A story should sound like the person telling it.">Replace these placeholders with first-person stories, shared with permission. Keep the person’s priorities and words intact.</SectionHeading>
        <div className="impact-stories">
          <article className="impact-story"><div className="impact-story__image"><img src={communityPhoto} alt="Portrait placeholder for a community story; replace with a consent-approved portrait" loading="lazy" /><span className="photo-tag">Community story photo placeholder</span></div><div className="impact-story__copy"><span className="tag">[Community name]</span><h3>[A real change, in their words]</h3><blockquote>“[Add a direct quote with the speaker’s permission.]”</blockquote><p>[Describe the verified outcome, with their own perspective at the centre.]</p><PlaceholderLabel>Name and quote to be approved</PlaceholderLabel></div></article>
          <article className="impact-story impact-story--reverse"><div className="impact-story__image"><img src={workPhoto} alt="Portrait placeholder for a WattsForAll technician story" loading="lazy" /><span className="photo-tag">Technician story photo placeholder</span></div><div className="impact-story__copy"><span className="tag">[Technician or maker]</span><h3>Skilled hands. Thoughtful work.</h3><blockquote>“[Add a technician’s words about the work, with their permission.]”</blockquote><p>[Share a specific, confirmed skill or opportunity created—without overclaiming.]</p><PlaceholderLabel>Name and quote to be approved</PlaceholderLabel></div></article>
        </div>
      </div></section>
      <section className="section section--paper"><div className="site-width split"><div className="split__copy"><Eyebrow>What changes, and how we count it</Eyebrow><h2>A good report says how it knows.</h2><p>For each number, show the time period, source, what is included and what is not. Keep the method understandable to the people represented by the number.</p><ul className="check-list"><li><ArrowRight size={18} />Define how a household or product is counted.</li><li><ArrowRight size={18} />Explain the method behind any CO₂ estimate.</li><li><ArrowRight size={18} />Share the limits alongside the results.</li></ul></div>
        <div className="report-placeholder"><div className="card-icon"><Download size={23} /></div><span className="tag">Report placeholder</span><h3>Impact report</h3><p>[Add the approved report title, date and accessible file.]</p><button className="button button--outline" type="button" disabled aria-disabled="true">Available when ready</button></div>
      </div></section>
      <section className="section section--forest"><div className="site-width"><div className="home-cta"><div><Eyebrow>Help shape what comes next</Eyebrow><h2>Power a story that can be measured.</h2><p>Partner, volunteer or help fund a community-led pilot.</p></div><ActionLink to="/get-involved" variant="primary">Get involved</ActionLink></div></div></section>
    </>
  );
}
