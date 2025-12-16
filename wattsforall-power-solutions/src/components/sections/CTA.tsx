import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
          
          {/* Glow Effects */}
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10 text-center py-16 md:py-24 px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary mb-8"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Join the Movement</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto"
            >
              Ready to Power <span className="text-gradient">Change</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Whether you're an investor, partner, or community leader—join us in transforming 
              e-waste into clean energy for those who need it most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="group"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                Join the Waitlist
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
