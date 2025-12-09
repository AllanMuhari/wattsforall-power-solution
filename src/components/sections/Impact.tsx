import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Users, Briefcase, TrendingUp } from "lucide-react";

const impacts = [
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Reduced e-waste pollution, lower carbon emissions, and responsible battery lifecycle management.",
    color: "primary",
    metrics: ["Tonnes of e-waste diverted", "Reduced toxic contamination", "Lower carbon footprint"],
  },
  {
    icon: Users,
    title: "Social Impact",
    description: "Clean power access for students, families, and communities without reliable electricity.",
    color: "accent",
    metrics: ["Households powered", "Students with study light", "Healthcare access enabled"],
  },
  {
    icon: Briefcase,
    title: "Economic Impact",
    description: "Job creation in battery collection, testing, and distribution, plus affordable energy for small businesses.",
    color: "primary",
    metrics: ["Green jobs created", "Small businesses supported", "Cost savings for families"],
  },
];

export const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Our Impact</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Creating <span className="text-gradient">Real Change</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            WattsForAll delivers measurable impact across environmental, social, and economic dimensions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl ${impact.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <impact.icon className={`w-7 h-7 ${impact.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-4">{impact.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{impact.description}</p>
                
                <div className="space-y-3">
                  {impact.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${impact.color === 'accent' ? 'bg-accent' : 'bg-primary'}`} />
                      <span className="text-sm text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision for Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Our Vision for Impact</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We're building toward a future where every off-grid community has access to 
                clean, affordable energy—while transforming the global e-waste problem into 
                a powerful opportunity for sustainable development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
