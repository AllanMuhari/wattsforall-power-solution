import { ArrowUpRight, HandHeart, Leaf, Lightbulb, Trophy, UsersRound } from "lucide-react";
import portraitFridah from "@/assets/fridah.jpeg";
import portraitWangari from "@/assets/wangari.jpeg";
import portraitGrace from "@/assets/grace.jpeg";
import { ActionLink, Eyebrow, PageIntro, SectionHeading } from "@/components/SitePrimitives";

const values = [
  { icon: UsersRound, title: "People before products", copy: "Listen first. Learn what a household or small business actually needs." },
  { icon: Leaf, title: "Care for the whole circle", copy: "Make the most of useful materials and plan for the ones that cannot be reused." },
  { icon: Lightbulb, title: "Be clear about what we know", copy: "Share evidence, name what is still being learned and never overstate an outcome." },
  { icon: HandHeart, title: "Build alongside communities", copy: "Design with local knowledge, and make space for local skills to grow." },
];

const teamMembers = [
  {
    name: "Fridah Kamau",
    role: "Founder & Project Lead",
    description:
      "Fridah is a civil and environmental engineering student with a strong passion for sustainable development, clean energy, and circular economy innovation. WattsForAll was born from her desire to tackle two urgent challenges at once: the growing e-waste crisis and the lack of reliable electricity in underserved communities. Her background in environmental engineering drives the project's strong focus on sustainability, climate action, and responsible resource use. Fridah leads the vision, impact strategy, partnerships, and overall direction of WattsForAll.",
    image: portraitFridah,
  },
  {
    name: "Wangari Kimani",
    role: "Operations & Strategy Lead",
    description:
      "Wangari plays a key role in shaping the strategic direction and day-to-day operations of WattsForAll. She supports project planning, coordination, and execution, helping translate ideas into actionable steps on the ground. With a strong interest in sustainability, entrepreneurship, and impact-driven innovation, she contributes to partnership development, operational systems, and growth strategy as the project scales. Her role ensures that WattsForAll remains organized, goal-oriented, and positioned for long-term impact.",
    image: portraitWangari,
  },
  {
    name: "Grace Ngari",
    role: "AI & Data Lead",
    description:
      "Grace leads the development of intelligent systems that enhance the performance, safety, and efficiency of WattsForAll's energy solutions. She focuses on integrating predictive analytics and AI-driven insights into battery and energy management systems, enabling features such as battery health prediction, performance optimization, and data-informed decision-making. Her work also extends to the development of smart dashboards and solar energy management tools that help monitor system performance and improve user experience. Through the application of data and artificial intelligence, Grace is helping shape a future where clean energy solutions are not only accessible, but also smarter and more resilient.",
    image: portraitGrace,
  },
];

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
        <div className="site-width"><SectionHeading eyebrow="Our leadership" title="Meet the women leading WattsForAll.">Three leaders bringing vision, operations, and data-led innovation to the work.</SectionHeading>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-card__image">
                  <img src={member.image} alt={`Portrait of ${member.name}`} loading="lazy" />
                </div>
                <div className="team-card__body">
                  <span className="tag">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--forest"><div className="site-width"><div className="recognition-layout"><div><Eyebrow>Recent news & leadership</Eyebrow><h2>A first-place finish for circular energy.</h2><p>WattsForAll founder Fridah Kamau took the top honor at Kenya’s 2026 Cleantech Innovation Competition for the team’s clean-energy storage solution, which repurposes second-life electric-vehicle batteries.</p><p>After the win, WattsForAll will continue developing its clean-energy storage solution through KCIC’s incubation program.</p></div><article className="award-card" aria-labelledby="cleantech-award-title"><div className="award-card__top"><span className="award-card__icon"><Trophy size={23} aria-hidden="true" /></span><time className="award-card__date" dateTime="2026-11-05">Announced 5 November 2026</time></div><span className="award-card__rank">1st place</span><h3 id="cleantech-award-title">2026 Cleantech Innovation Competition</h3><p>Fridah Kamau’s WattsForAll solution repurposes second-life EV batteries for clean energy storage.</p><div className="award-card__details"><p className="award-card__detail-label">Competition partners</p><p>Organized by the Kenya Climate Innovation Center (KCIC) with the Embassy of Switzerland in Kenya, SICPA and APA Insurance Limited.</p></div><div className="award-card__partner-links"><a href="https://www.kenyacic.org" target="_blank" rel="noreferrer">Kenya Climate Innovation Center <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a><a href="https://www.schweiz-kenia.eda.admin.ch" target="_blank" rel="noreferrer">Embassy of Switzerland in Kenya <ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a></div></article></div><div className="home-cta home-cta--compact"><p>Curious about our work? We’re happy to start with a conversation.</p><ActionLink to="/contact" variant="primary">Get in touch</ActionLink></div></div></section>
    </>
  );
}
