import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Battery, Sun, Leaf, Users, Zap, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: RefreshCw,
    title: "Circular Economy",
    description: "We recover and repurpose discarded lithium batteries from e-waste, giving them a second life as clean energy sources.",
  },
  {
    icon: Battery,
    title: "Second-Life Batteries",
    description: "Our power packs use refurbished lithium cells that still hold significant capacity, reducing waste and cost.",
  },
  {
    icon: Sun,
    title: "Solar Integration",
    description: "Paired with portable solar panels, our systems provide renewable, off-grid power for homes and small businesses.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "We serve off-grid households, rural schools, health clinics, and small enterprises lacking reliable electricity.",
  },
  {
    icon: Leaf,
    title: "Environmental Action",
    description: "Every battery we repurpose means less toxic waste in landfills and reduced demand for new resource extraction.",
  },
  {
    icon: Zap,
    title: "Affordable Access",
    description: "Our solutions cost a fraction of traditional options, making clean energy accessible to underserved communities.",
  },
];

export const HomeFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="text-gradient">WattsForAll</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We transform discarded electronics into portable, solar-rechargeable power packs that bring clean, 
            affordable energy to communities without reliable electricity access.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/solution">
              <Button variant="hero" size="lg">
                Explore Our Solution
              </Button>
            </Link>
            <Link to="/problem">
              <Button variant="heroOutline" size="lg">
                Learn About the Problem
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
