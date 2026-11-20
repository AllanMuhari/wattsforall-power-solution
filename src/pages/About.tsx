import { ArrowRight, HandHeart, Leaf, Lightbulb, UsersRound } from "lucide-react";
import portraitOne from "@/assets/fridah.jpeg";
import portraitTwo from "@/assets/grace.jpeg";
import portraitThree from "@/assets/keith.jpg";
import { ActionLink, Eyebrow, PageIntro, PlaceholderLabel, SectionHeading } from "@/components/SitePrimitives";

const values = [
  { icon: UsersRound, title: "People before products", copy: "Listen first. Learn what a household or small business actually needs." },
  { icon: Leaf, title: "Care for the whole circle", copy: "Make the most of useful materials and plan for the ones that cannot be reused." },
  { icon: Lightbulb, title: "Be clear about what we know", copy: "Share evidence, name what is still being learned and never overstate an outcome." },
  { icon: HandHeart, title: "Build alongside communities", copy: "Design with local knowledge, and make space for local skills to grow." },
];

const teamPhotos = [portraitOne, portraitTwo, portraitThree];

export default function About() {
  return (
    <>
      <PageIntro eyebrow="Our Story" title="A more human kind of energy story." copy="WattsForAll is a social enterprise turning discarded lithium batteries into affordable, portable power for underserved, off-grid communities." aside={<p>Our mission is simple to say: clean energy access for everyone, powered by circular innovation. The work starts with listening.</p>} />
      <section className="section section--paper">
        <div className="site-width split">
          <div className="split__copy"><Eyebrow>Why we’re here</Eyebrow><h2>Good energy should move with people.</h2><p>Reliable power can shape whether a phone is charged, a room is lit or a small business can keep working. At the same time, discarded batteries hold materials that deserve careful handling.</p><p>WattsForAll brings those needs into one conversation: explore what can be safely used again, make portable power more accessible, and keep responsible recovery part of the plan.</p><ActionLink to="/how-it-works" variant="text">How the work happens</ActionLink></div>
          <div className="story-pullquote"><span className="story-pullquote__mark">“</span><p>Turning e-waste into clean power for off-grid communities.</p><span className="story-pullquote__byline">The WattsForAll mission</span></div>
        </div>
      </section>
      <section className="section">
        <div className="site-width"><SectionHeading eyebrow="What guides us" title="A few things we want to get right.">These principles shape how we speak, how we build and who gets to be part of the story.</SectionHeading>
          <div className="card-grid">{values.map(({ icon: Icon, title, copy }) => <article className="story-card" key={title}><div className="card-icon"><Icon size={22} aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>
      <section className="section section--sage">
        <div className="site-width"><SectionHeading eyebrow="The people behind the work" title="Real people. Their words, their way.">Add consent-approved portraits and short bios here. Names and roles are intentionally left open until confirmed.</SectionHeading>
          <div className="team-grid">{teamPhotos.map((photo, index) => <article className="team-card" key={photo}><div className="team-card__image"><img src={photo} alt={`Portrait placeholder ${index + 1} for the WattsForAll team`} loading="lazy" /></div><div className="team-card__body"><span className="tag">Team portrait placeholder</span><h3>[Name to be confirmed]</h3><p>[Role and a short, approved introduction]</p></div></article>)}</div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="site-width split">
          <div className="split__copy"><Eyebrow>Where the story began</Eyebrow><h2>A founding story worth telling properly.</h2><p>We’re leaving room for the real details: what sparked the idea, who was there, and what the earliest community conversations taught us. Add a verified founder account here rather than a made-up origin story.</p><PlaceholderLabel>Founding story to be supplied and approved</PlaceholderLabel><div className="button-row"><ActionLink to="/contact" variant="outline">Ask us about our story</ActionLink></div></div>
          <div className="timeline" aria-label="WattsForAll milestones to be confirmed">
            {["First idea", "Community listening", "First pilot", "What’s next"].map((item) => <div className="timeline-item" key={item}><span className="timeline-item__year">[Year]</span><div><h3>{item}</h3><p>[Add a verified milestone and a short, specific detail.]</p></div></div>)}
          </div>
        </div>
      </section>
      <section className="section section--small">
        <div className="site-width split">
          <div><Eyebrow>Photography direction</Eyebrow><h2>Show dignity, agency and everyday life.</h2><p>Use real, permission-based photography—not pity, stocky product shots or staged “savior” scenes.</p></div>
          <ul className="check-list"><li><ArrowRight size={17} />Hands at work: technicians testing and rebuilding as skilled craftspeople.</li><li><ArrowRight size={17} />Homes, markets and classrooms in warm natural light.</li><li><ArrowRight size={17} />Candid moments: charging a phone, opening a shop, switching on a light.</li><li><ArrowRight size={17} />Portraits with the person’s name, words and informed consent.</li><li><ArrowRight size={17} />A clear photo caption and useful alt text for every image.</li></ul>
        </div>
      </section>
      <section className="section section--forest"><div className="site-width"><div className="press-placeholder"><div><Eyebrow>Recognition & press</Eyebrow><h2>Make space for the real milestones.</h2><p>Use this section for confirmed coverage, awards or recognition—with the original source and date.</p></div><div className="partner-card">Press or recognition placeholder</div></div><div className="home-cta home-cta--compact"><p>Curious about our work? We’re happy to start with a conversation.</p><ActionLink to="/contact" variant="primary">Get in touch</ActionLink></div></div></section>
    </>
  );
}
