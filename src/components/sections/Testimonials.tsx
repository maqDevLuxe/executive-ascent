import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../AnimatedText";

const testimonials = [
  {
    quote: "Within 90 days, we restructured our entire revenue model and added $2.3M in annual recurring revenue. The clarity alone was worth 100x the investment.",
    name: "Alexandra Chen",
    title: "CEO, Meridian Ventures",
  },
  {
    quote: "I've worked with McKinsey, Bain, and BCG. This is the first advisory relationship that actually moved the needle on my personal wealth trajectory.",
    name: "Marcus Blackwell",
    title: "Managing Partner, Blackwell Capital",
  },
  {
    quote: "The mastermind connection alone generated a $4M joint venture. This isn't coaching—it's strategic weapon deployment for your business.",
    name: "Sarah Thornton",
    title: "Founder & CTO, Axiom Technologies",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <AnimatedText as="p" className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">
            Client Results
          </AnimatedText>
          <AnimatedText as="h2" className="text-3xl md:text-5xl font-serif text-foreground" delay={0.2}>
            C-Level Testimonials
          </AnimatedText>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-background p-8 md:p-10 flex flex-col justify-between"
            >
              <blockquote className="text-sm font-sans text-foreground/80 leading-relaxed italic mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="gold-divider-wide mb-4" />
                <p className="text-sm font-serif text-foreground">{testimonial.name}</p>
                <p className="text-xs font-sans text-muted-foreground mt-1">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
