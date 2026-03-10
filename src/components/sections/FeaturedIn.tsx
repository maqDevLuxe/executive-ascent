import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "FORBES", letters: "FORBES" },
  { name: "WSJ", letters: "THE WALL STREET JOURNAL" },
  { name: "BLOOMBERG", letters: "BLOOMBERG" },
  { name: "HARVARD", letters: "HARVARD BUSINESS REVIEW" },
  { name: "INC", letters: "INC." },
];

const FeaturedIn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 border-y border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-sans tracking-[0.3em] uppercase text-muted-foreground mb-12">
          As Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {logos.map((logo, i) => (
            <motion.span
              key={logo.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.4 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ opacity: 1 }}
              className="font-serif text-sm md:text-base tracking-[0.2em] text-foreground cursor-default transition-opacity"
            >
              {logo.letters}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
