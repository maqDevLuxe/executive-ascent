import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../AnimatedText";
import MagneticButton from "../MagneticButton";

const CTAFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      {/* CTA Section */}
      <section id="apply" ref={ref} className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedText as="p" className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-6">
            Limited Availability
          </AnimatedText>
          <AnimatedText as="h2" className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8 leading-tight" delay={0.2}>
            Ready to Architect
            <span className="block text-gold-gradient italic">Your Empire?</span>
          </AnimatedText>
          <AnimatedText as="p" className="text-sm font-sans text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto" delay={0.4}>
            We accept fewer than 8% of applicants. Schedule your complimentary strategy
            session to determine if we're the right fit for your ambitions.
          </AnimatedText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticButton className="px-12 py-5 bg-gold text-primary-foreground font-sans text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-colors duration-500">
              Apply for Strategy Session
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xs font-sans text-muted-foreground mt-8"
          >
            3 spots remaining for Q2 2026
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <p className="font-serif text-xl tracking-wider text-foreground mb-4">
                ASCEND<span className="text-gold">.</span>
              </p>
              <p className="text-xs font-sans text-muted-foreground leading-relaxed">
                Elite strategic advisory for founders and executives
                who refuse to settle for ordinary growth.
              </p>
            </div>
            <div>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-gold mb-4">Navigation</p>
              <div className="space-y-3">
                {["Methodology", "Results", "Mastermind", "Testimonials", "Apply"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-xs font-sans text-muted-foreground hover:text-gold transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-gold mb-4">Connect</p>
              <div className="space-y-3">
                <p className="text-xs font-sans text-muted-foreground">advisory@ascend.com</p>
                <p className="text-xs font-sans text-muted-foreground">New York · London · Dubai</p>
              </div>
            </div>
          </div>

          <div className="gold-divider-wide mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-sans text-muted-foreground">
              © 2026 Ascend Advisory. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-xs font-sans text-muted-foreground hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="text-xs font-sans text-muted-foreground hover:text-gold transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
