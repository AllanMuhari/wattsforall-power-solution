import { motion } from "framer-motion";
import { ArrowRight, Zap, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Clean energy for communities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated Glow Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-custom section-padding relative z-10 pt-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-8 animate-fade-in">
            <Recycle className="w-4 h-4" />
            <span className="text-sm font-medium">Energy. Reimagined.</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Turning E-Waste into{" "}
            <span className="text-gradient">Clean Power</span> for Off-Grid Communities
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            WattsForAll transforms discarded lithium batteries into affordable, portable power solutions
            for underserved communities. Clean energy access for everyone, powered by circular innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              <Zap className="w-5 h-5" />
              Partner With Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection("#about")}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { value: "57M+", label: "Tonnes of E-Waste Yearly" },
              { value: "600M+", label: "Africans Lack Power" },
              { value: "∞", label: "Potential for Change" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient font-display">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
