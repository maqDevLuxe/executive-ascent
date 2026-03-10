import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Methodology", "Results", "Mastermind", "Testimonials", "Apply"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#" className="font-serif text-xl tracking-wider text-foreground">
          ASCEND<span className="text-gold">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <motion.div animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="w-6 h-px bg-gold" />
            <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} className="w-6 h-px bg-gold" />
            <motion.div animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="w-6 h-px bg-gold" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
