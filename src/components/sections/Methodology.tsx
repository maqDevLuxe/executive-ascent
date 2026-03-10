import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../AnimatedText";

const pillars = [
  {
    number: "01",
    title: "Strategic Clarity",
    description: "We deconstruct your current business architecture and rebuild with a framework designed for exponential scale.",
  },
  {
    number: "02",
    title: "Revenue Architecture",
    description: "Engineered revenue systems that create predictable, scalable income streams and eliminate guesswork from growth.",
  },
  {
    number: "03",
    title: "Executive Positioning",
    description: "Elevate your personal brand to command premium prices and attract high-caliber opportunities effortlessly.",
  },
  {
    number: "04",
    title: "Legacy Building",
    description: "Create systems and structures that transcend your daily involvement, building true generational wealth.",
  },
];

const Methodology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="methodology" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <AnimatedText as="p" className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">
            The Framework
          </AnimatedText>
          <AnimatedText as="h2" className="text-3xl md:text-5xl font-serif text-foreground" delay={0.2}>
            The Ascend Methodology
          </AnimatedText>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-background p-10 md:p-14 group hover:bg-secondary/30 transition-colors duration-500"
            >
              <span className="text-gold font-sans text-xs tracking-[0.2em]">{pillar.number}</span>
              <h3 className="text-2xl font-serif text-foreground mt-4 mb-4 group-hover:text-gold transition-colors duration-500">
                {pillar.title}
              </h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
