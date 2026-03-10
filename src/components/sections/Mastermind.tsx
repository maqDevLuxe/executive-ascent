import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../AnimatedText";

const features = [
  "Private quarterly retreats in world-class venues",
  "Direct access to a curated network of 8-figure founders",
  "Monthly 1:1 strategic advisory sessions",
  "Real-time deal flow and investment opportunities",
  "Exclusive frameworks and proprietary growth tools",
  "Peer accountability with handpicked industry leaders",
];

const Mastermind = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mastermind" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedText as="p" className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">
              By Invitation Only
            </AnimatedText>
            <AnimatedText as="h2" className="text-3xl md:text-5xl font-serif text-foreground mb-8" delay={0.2}>
              The Inner Circle Mastermind
            </AnimatedText>
            <AnimatedText as="p" className="text-sm font-sans text-muted-foreground leading-relaxed mb-10" delay={0.3}>
              An exclusive collective of extraordinary founders and executives who refuse to settle.
              Limited to 12 members per cohort—by application and interview only.
            </AnimatedText>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <p className="text-sm font-sans text-foreground/80">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="border border-border p-10 md:p-14 bg-secondary/20"
          >
            <div className="text-center">
              <p className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-6">Investment</p>
              <p className="text-5xl md:text-6xl font-serif text-foreground mb-2">$50K</p>
              <p className="text-sm font-sans text-muted-foreground mb-8">Per Annum · 12 Seats Only</p>
              <div className="gold-divider-wide mb-8" />
              <p className="text-xs font-sans text-muted-foreground italic leading-relaxed">
                "The ROI from one connection made in this room paid for my membership 10x over."
              </p>
              <p className="text-xs font-sans text-gold mt-4 tracking-wider">— Former Fortune 500 VP</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mastermind;
