import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../AnimatedText";

const criteria = [
  { title: "Revenue Floor", description: "Current annual revenue of $500K+ or executive compensation of $250K+" },
  { title: "Growth Mindset", description: "Demonstrated commitment to personal and professional excellence" },
  { title: "Decision Authority", description: "C-suite, founder, or senior leadership with full P&L ownership" },
  { title: "Implementation Speed", description: "Proven track record of taking decisive action, not just consuming content" },
];

const ClientSelection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText as="p" className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">
            Not for Everyone
          </AnimatedText>
          <AnimatedText as="h2" className="text-3xl md:text-5xl font-serif text-foreground mb-6" delay={0.2}>
            Strict Client Selection
          </AnimatedText>
          <AnimatedText as="p" className="text-sm font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed" delay={0.3}>
            We maintain an acceptance rate of less than 8%. This isn't exclusivity for vanity—it's a
            commitment to ensuring every client receives transformative results.
          </AnimatedText>
          <div className="gold-divider mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {criteria.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-border p-8 hover:border-gold/30 transition-colors duration-500"
            >
              <h3 className="text-lg font-serif text-foreground mb-3">{item.title}</h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSelection;
