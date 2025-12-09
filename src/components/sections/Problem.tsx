import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trash2, Battery, Zap, Home, AlertTriangle } from "lucide-react";
import problemImage from "@/assets/problem-ewaste.jpg";

const problems = [
  {
    icon: Trash2,
    title: "E-Waste Pollution",
    description: "The rapid growth of electronic devices has created a global e-waste crisis. Discarded phones, laptops, and appliances are piling up in landfills, releasing toxic substances into the environment.",
  },
  {
    icon: Battery,
    title: "Lithium Battery Disposal",
    description: "Lithium-ion batteries are rarely disposed of safely. Many still retain usable capacity but are thrown away prematurely, increasing fire risks and chemical contamination.",
  },
  {
    icon: Zap,
    title: "Power Outages",
    description: "Across many regions, electricity supply remains unreliable. Load shedding and frequent blackouts disrupt daily life, shut down small businesses, and interrupt education.",
  },
  {
    icon: Home,
    title: "Off-Grid Energy Poverty",
    description: "Millions of people, particularly in rural areas, still live completely off the electricity grid, limiting their access to lighting, communication, and economic opportunity.",
  },
];

export const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 text-destructive mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">The Problem</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A Crisis That Demands <span className="text-destructive">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every year, millions of lithium batteries are discarded while still holding usable energy,
            while millions of people lack access to reliable electricity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={problemImage}
                alt="E-waste pollution crisis"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-semibold">57+ million tonnes</span> of e-waste generated globally each year
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-destructive/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Problems Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-destructive/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
