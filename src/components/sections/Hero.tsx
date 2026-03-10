import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import MagneticButton from "../MagneticButton";
import heroImage from "@/assets/hero-executive.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with slow zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <img src={heroImage} alt="Executive in luxury office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "4rem" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="gold-divider mb-8 mx-auto"
        />

        <AnimatedText as="p" className="text-xs font-sans tracking-[0.4em] uppercase text-gold mb-6" delay={0.3}>
          Elite Business & Career Growth Advisory
        </AnimatedText>

        <AnimatedText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-foreground mb-8" delay={0.5}>
          Architect Your
          <span className="block text-gold-gradient italic">Legacy of Wealth</span>
        </AnimatedText>

        <AnimatedText as="p" className="text-base md:text-lg font-sans font-light text-pearl-muted max-w-2xl mx-auto mb-12 leading-relaxed" delay={0.7}>
          Exclusive strategic advisory for founders, executives, and industry leaders ready to
          command their market and multiply their impact.
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <MagneticButton className="px-10 py-4 bg-gold text-primary-foreground font-sans text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-colors duration-500">
            Apply for a Strategy Session
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
