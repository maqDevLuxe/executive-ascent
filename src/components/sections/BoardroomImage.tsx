import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import boardroom from "@/assets/boardroom.jpg";

const BoardroomImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0"
      >
        <img src={boardroom} alt="Luxury boardroom" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={isInView ? { opacity: 0.6, letterSpacing: "0.5em" } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-xs font-sans uppercase text-foreground tracking-widest"
        >
          Where Empires Are Built
        </motion.p>
      </div>
    </section>
  );
};

export default BoardroomImage;
