import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Battery, Sun, Package, Lightbulb, CheckCircle } from "lucide-react";
import solutionImage from "@/assets/solution-solar.jpg";

const steps = [
  {
    number: "01",
    icon: Battery,
    title: "Battery Collection",
    description: "We collect discarded lithium batteries from e-waste streams, preventing environmental contamination.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Testing & Refurbishment",
    description: "Each battery is rigorously tested for safety and capacity, then professionally refurbished.",
  },
  {
    number: "03",
    icon: Sun,
    title: "Solar Integration",
    description: "Batteries are integrated with solar charging systems for clean, renewable energy recharging.",
  },
  {
    number: "04",
    icon: Package,
    title: "Portable Power Packs",
    description: "Assembled into durable, user-friendly portable power solutions for everyday use.",
  },
  {
    number: "05",
    icon: Lightbulb,
    title: "Community Distribution",
    description: "Power packs reach off-grid communities, enabling lighting, phone charging, and small business operation.",
  },
];

export const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="section-padding bg-card/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium">The Solution</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="text-gradient">WattsForAll</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our compact, portable second-life battery power packs provide safe and affordable 
            electricity for lighting, phone charging, and powering small appliances.
          </p>
        </motion.div>

        {/* Solution Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Second-Life Battery Technology
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Second-life batteries are lithium-ion cells recovered from discarded electronics 
              such as laptops and other devices. While these batteries may no longer meet the 
              high-performance demands of new electronics, they often retain a significant 
              percentage of their original energy capacity.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Solar charging completes the WattsForAll system by providing a clean, renewable 
              source of electricity. Users can generate their own energy without relying on 
              unstable grid power, fossil fuels, or expensive generators.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "70%+", label: "Retained Capacity" },
                { value: "5+ Years", label: "Extended Life" },
                { value: "100%", label: "Clean Energy" },
                { value: "80%", label: "Cost Reduction" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-lg p-4">
                  <div className="text-2xl font-bold text-gradient font-display">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={solutionImage}
                alt="Solar powered community"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl font-bold text-center mb-12"
        >
          Our Process
        </motion.h3>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-primary/30 font-display">{step.number}</span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-display text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
