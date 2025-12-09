import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Sparkles } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-padding bg-card/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">About Us</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="text-gradient">WattsForAll</span> Was Created
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
            WattsForAll was created in response to two growing global challenges that are deeply connected: 
            the rising crisis of electronic waste and the lack of reliable access to clean electricity. 
            Across Africa and many other parts of the world, discarded electronics are piling up while 
            millions of people still live with frequent power outages or no electricity at all.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To unlock clean, affordable, and sustainable energy access by transforming electronic 
              waste into safe, second-life power solutions for underserved communities.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A world where clean, reliable energy is accessible to every community, and electronic 
              waste is no longer a burden but a powerful resource for sustainable development.
            </p>
          </motion.div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-bold mb-6">The Spark Behind WattsForAll</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most lithium batteries thrown away still retain significant usable capacity. WattsForAll 
                was born from the simple but powerful question: <span className="text-foreground font-medium">what if this 
                wasted energy could be redirected to power lives and livelihoods?</span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By recovering and repurposing second-life lithium batteries and integrating them with 
                solar charging, WattsForAll turns waste into clean, portable energy for off-grid and 
                underserved communities. Our work sits at the intersection of clean energy, climate action, 
                and circular economy innovation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
