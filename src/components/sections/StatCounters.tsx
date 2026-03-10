import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const useCounter = (end: number, duration: number, isInView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, isInView]);
  return count;
};

const stats = [
  { value: 247, prefix: "$", suffix: "M+", label: "Revenue Generated for Clients" },
  { value: 1200, prefix: "", suffix: "+", label: "Executives Coached" },
  { value: 18, prefix: "", suffix: "", label: "Countries Represented" },
  { value: 94, prefix: "", suffix: "%", label: "Achieve ROI Within 90 Days" },
];

const StatCounters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => {
          const count = useCounter(stat.value, 2500, isInView);
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-serif text-gold">
                {stat.prefix}{count.toLocaleString()}{stat.suffix}
              </p>
              <p className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground mt-3">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatCounters;
