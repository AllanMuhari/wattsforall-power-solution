import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/SitePrimitives";

const contextFigures = [
  {
    scope: "Worldwide · 2022",
    title: "E-waste generated",
    value: "62",
    unit: "million tonnes",
    description: "of electronic waste was produced worldwide in 2022.",
    source: "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
    sourceLabel: "Global E-waste Monitor 2024",
  },
  {
    scope: "Worldwide · 2022",
    title: "Documented collection and recycling",
    value: "22.3",
    unit: "%",
    description: "of the year’s global e-waste mass was documented as properly collected and recycled.",
    source: "https://ewastemonitor.info/the-global-e-waste-monitor-2024/",
    sourceLabel: "Global E-waste Monitor 2024",
  },
  {
    scope: "Kenya · 2023",
    title: "Access to electricity",
    value: "76.2",
    unit: "%",
    description: "of Kenya’s population had access to electricity.",
    source: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=KE",
    sourceLabel: "World Bank · Access to electricity",
  },
];

export function PublicContext() {
  return (
    <section className="section section--paper public-context" aria-labelledby="public-context-heading">
      <div className="site-width">
        <div className="public-context__header">
          <div>
            <Eyebrow>Public data · separate from our results</Eyebrow>
            <h2 id="public-context-heading">The wider picture.</h2>
          </div>
          <p>Independent data helps explain the energy and materials challenges. These figures provide context; they are not outcomes delivered by WattsForAll.</p>
        </div>
        <div className="public-context__grid">
          {contextFigures.map((figure) => (
            <article className="public-context__card" key={figure.title}>
              <span className="public-context__scope">{figure.scope}</span>
              <h3>{figure.title}</h3>
              <p className="public-context__value"><strong>{figure.value}</strong><span>{figure.unit}</span></p>
              <p className="public-context__description">{figure.description}</p>
              <a className="public-context__source" href={figure.source} target="_blank" rel="noopener noreferrer">
                {figure.sourceLabel}<ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <p className="public-context__note">Sources: ITU and UNITAR, <cite>The Global E-waste Monitor 2024</cite>; World Bank, access-to-electricity indicator (EG.ELC.ACCS.ZS). Figures retain the years and scope reported by each source.</p>
      </div>
    </section>
  );
}
