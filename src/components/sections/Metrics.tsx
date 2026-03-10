import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedText from "../AnimatedText";

const useCounter = (end: number, duration: number, isInView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, isInView]);
  return count;
};

const metrics = [
  { value: 847, suffix: "%", label: "Average Revenue Growth", prefix: "" },
  { value: 12, suffix: "M+", label: "Client Revenue Generated", prefix: "$" },
  { value: 96, suffix: "%", label: "Client Retention Rate", prefix: "" },
  { value: 3, suffix: "x", label: "Average Valuation Increase", prefix: "" },
];

const Metrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" ref={ref} className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <AnimatedText as="p" className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">
            Proven Results
          </AnimatedText>
          <AnimatedText as="h2" className="text-3xl md:text-5xl font-serif text-foreground" delay={0.2}>
            Business Scaling Metrics
          </AnimatedText>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {metrics.map((metric, i) => {
            const count = useCounter(metric.value, 2000, isInView);
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background p-8 md:p-12 text-center"
              >
                <div className="text-3xl md:text-5xl font-serif text-gold-gradient mb-3">
                  {metric.prefix}{count}{metric.suffix}
                </div>
                <p className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
