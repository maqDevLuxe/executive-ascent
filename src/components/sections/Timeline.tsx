import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../AnimatedText";

const phases = [
  {
    phase: "Days 1–30",
    title: "Deconstruct & Diagnose",
    description: "Deep-dive audit of your business model, revenue streams, positioning, and growth bottlenecks. We identify the 20% that drives 80% of your results.",
  },
  {
    phase: "Days 31–60",
    title: "Architect & Activate",
    description: "Deploy new revenue architecture, reposition your brand for premium pricing, and install high-performance operating systems.",
  },
  {
    phase: "Days 61–90",
    title: "Scale & Systematize",
    description: "Automate, delegate, and scale. Build the machine that runs without you while multiplying revenue and impact.",
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <AnimatedText as="p" className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">
            The Journey
          </AnimatedText>
          <AnimatedText as="h2" className="text-3xl md:text-5xl font-serif text-foreground" delay={0.2}>
            90-Day Transformation
          </AnimatedText>
          <div className="gold-divider mt-6" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-background z-10" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="text-xs font-sans tracking-[0.3em] uppercase text-gold">{phase.phase}</span>
                  <h3 className="text-2xl font-serif text-foreground mt-2 mb-3">{phase.title}</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
