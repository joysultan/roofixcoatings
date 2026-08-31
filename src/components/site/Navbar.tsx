import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Recent Projects", href: "#projects" },
  { label: "Before & After", href: "#before-after" },
  { label: "Why Roofix", href: "#why-roofix" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[110rem] items-center justify-between gap-8 px-6 lg:px-12"
      >
        <a
          href="#home"
          className={`label-eyebrow transition-colors duration-500 ${
            scrolled || open ? "text-foreground" : "text-on-dark"
          }`}
        >
          Roofix <span className="opacity-60">Coatings</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[0.8rem] tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-on-dark-muted hover:text-on-dark"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`label-eyebrow hidden rounded-full border px-5 py-2.5 transition-all duration-300 sm:inline-flex ${
              scrolled
                ? "border-foreground/20 bg-primary text-primary-foreground hover:bg-charcoal-soft"
                : "border-on-dark/40 text-on-dark hover:bg-on-dark hover:text-charcoal"
            }`}
          >
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`inline-flex size-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
              scrolled || open ? "border-border text-foreground" : "border-on-dark/40 text-on-dark"
            }`}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-6 mt-4 space-y-1 border-t border-border pt-4 lg:hidden"
        >
          {[...LINKS].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-lg text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
