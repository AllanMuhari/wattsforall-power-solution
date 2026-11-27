import communityPhoto from "@/assets/fridah.jpeg";
import workPhoto from "@/assets/wangari.jpeg";
import { PublicContext } from "@/components/sections/PublicContext";
import { ActionLink, Eyebrow, PageIntro, SectionHeading } from "@/components/SitePrimitives";

export default function Impact() {
  return (
    <>
      <PageIntro eyebrow="Impact" title="The difference is in the details." copy="Energy access, responsible material recovery and local skills belong in the same picture." />
      <section className="section section--sage"><div className="site-width"><SectionHeading eyebrow="People behind the work" title="The people turning ideas into action.">Meet the people bringing clean energy, circular innovation and community partnerships into focus.</SectionHeading>
        <div className="impact-stories">
          <article className="impact-story"><div className="impact-story__image"><img src={communityPhoto} alt="Portrait of Fridah Kamau, Founder and Project Lead" loading="lazy" /></div><div className="impact-story__copy"><span className="tag">Founder &amp; Project Lead</span><h3>Clean energy and circular innovation.</h3><p>With a background in civil and environmental engineering, Fridah leads WattsForAll’s vision, impact strategy, partnerships, and overall direction.</p></div></article>
          <article className="impact-story impact-story--reverse"><div className="impact-story__image"><img src={workPhoto} alt="Portrait of Wangari Kimani, Operations and Strategy Lead" loading="lazy" /></div><div className="impact-story__copy"><span className="tag">Operations &amp; Strategy Lead</span><h3>Helping ideas become action.</h3><p>Wangari plays a key role in shaping the strategic direction and day-to-day operations of WattsForAll. She supports project planning, coordination, and execution, helping translate ideas into actionable steps on the ground.</p></div></article>
        </div>
      </div></section>
      <PublicContext />
      <section className="section section--forest"><div className="site-width"><div className="home-cta"><div><Eyebrow>Help shape what comes next</Eyebrow><h2>Power a story that can be measured.</h2><p>Partner, volunteer or help fund a community-led pilot.</p></div><ActionLink to="/get-involved" variant="primary">Get involved</ActionLink></div></div></section>
    </>
  );
}
