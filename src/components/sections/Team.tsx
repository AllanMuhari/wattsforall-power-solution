import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Linkedin } from "lucide-react";

const team = [
  {
    name: "Fridah Kamau",
    role: "Founder & Project Lead",
    description: "Fridah is a civil and environmental engineering student with a strong passion for sustainable development, clean energy, and circular economy innovation. WattsForAll was born from her desire to tackle two urgent challenges at once: the growing e-waste crisis and the lack of reliable electricity in underserved communities. Her background in environmental engineering drives the project's strong focus on sustainability, climate action, and responsible resource use. Fridah leads the vision, impact strategy, partnerships, and overall direction of WattsForAll.",
    image: null,
  },
  {
    name: "Wangari Kimani",
    role: "Operations & Strategy Lead",
    description: "Wangari plays a key role in shaping the strategic direction and day-to-day operations of WattsForAll. She supports project planning, coordination, and execution, helping translate ideas into actionable steps on the ground. With a strong interest in sustainability, entrepreneurship, and impact-driven innovation, she contributes to partnership development, operational systems, and growth strategy as the project scales. Her role ensures that WattsForAll remains organized, goal-oriented, and positioned for long-term impact.",
    image: null,
  },
  {
    name: "Keith Brian",
    role: "Technical Lead",
    description: "Keith Brian is an electrical engineer with hands-on experience in battery systems, power electronics, and energy storage solutions. As the technical lead of WattsForAll, he is responsible for the design, testing, and safety of the second-life battery power packs and the integration of solar charging systems. His expertise ensures that all WattsForAll products are safe, efficient, and reliable for real-world use in off-grid and low-resource environments.",
    image: null,
  },
];

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding bg-card/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Our Team</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the <span className="text-gradient">Visionaries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate team dedicated to turning e-waste into opportunity and bringing clean energy to those who need it most.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 group text-center"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 lg:mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-2xl lg:text-4xl font-bold text-primary font-display">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>

              <h3 className="font-display text-xl lg:text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3 lg:mb-4 text-sm lg:text-base">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed text-xs lg:text-sm">{member.description}</p>

              <div className="mt-4 lg:mt-6 flex justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
