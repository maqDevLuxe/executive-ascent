import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const AnimatedText = ({ children, className = "", delay = 0, as: Tag = "div" }: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" }}
      animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
};

export default AnimatedText;
