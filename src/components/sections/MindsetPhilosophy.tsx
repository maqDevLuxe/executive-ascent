import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../AnimatedText";

const principles = [
  "Your revenue ceiling is a reflection of your identity ceiling.",
  "Strategy without execution is philosophy. Execution without strategy is chaos.",
  "The market doesn't reward the best—it rewards the most positioned.",
  "Wealth is not built by working harder. It's built by thinking differently.",
];

const MindsetPhilosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedText as="p" className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">
          Philosophy
        </AnimatedText>
        <AnimatedText as="h2" className="text-3xl md:text-5xl font-serif text-foreground mb-16" delay={0.2}>
          Mindset & Career Growth
        </AnimatedText>

        <div className="space-y-12">
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <blockquote className="text-lg md:text-2xl font-serif italic text-foreground/80 leading-relaxed">
                "{principle}"
              </blockquote>
              {i < principles.length - 1 && <div className="gold-divider mt-12" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MindsetPhilosophy;
