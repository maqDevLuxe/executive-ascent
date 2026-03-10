import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../AnimatedText";

const posts = [
  {
    category: "Strategy",
    title: "The 7-Figure Positioning Framework: How to Command Premium Prices",
    date: "March 2026",
  },
  {
    category: "Leadership",
    title: "Why 99% of CEOs Fail at Scaling—And the Mental Model That Fixes It",
    date: "February 2026",
  },
  {
    category: "Growth",
    title: "From $1M to $10M: The Revenue Architecture Blueprint",
    date: "January 2026",
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText as="p" className="text-xs font-sans tracking-[0.3em] uppercase text-gold mb-4">
            Insights
          </AnimatedText>
          <AnimatedText as="h2" className="text-3xl md:text-5xl font-serif text-foreground" delay={0.2}>
            High-Ticket Strategy Blog
          </AnimatedText>
          <div className="gold-divider mt-6" />
        </div>

        <div className="space-y-px bg-border">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer hover:bg-secondary/30 transition-colors duration-500"
            >
              <div className="flex-1">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-gold">{post.category}</span>
                <h3 className="text-lg md:text-xl font-serif text-foreground mt-2 group-hover:text-gold transition-colors duration-500">
                  {post.title}
                </h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs font-sans text-muted-foreground">{post.date}</span>
                <motion.span
                  className="text-gold text-sm"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
