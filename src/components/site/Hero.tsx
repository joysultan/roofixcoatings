import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroRoof from "@/assets/hero-roof.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;
const LINES = ["Restore your roof.", "Protect your home."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "12%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-[100svh] overflow-hidden bg-charcoal">
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
        initial={reduced ? { opacity: 0 } : { scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <img
          src={heroRoof}
          alt="Freshly restored charcoal tile roof on an Australian home at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        className="gradient-hero-overlay absolute inset-0"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.72, 0.86, 0.78] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[110rem] flex-col justify-end px-6 pb-16 pt-32 lg:px-12 lg:pb-24">
        <motion.p
          className="label-eyebrow text-on-dark-muted"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        >
          Roof Painting <span className="mx-2 text-terracotta">•</span> Roof Restoration
        </motion.p>

        <h1 className="display-xl mt-6 max-w-5xl text-on-dark">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.05em]">
              <motion.span
                className="block"
                initial={reduced ? { opacity: 0 } : { y: "108%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.45 + i * 0.14, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
        >
          Roof painting and restoration specialists dedicated to restoring and protecting Aussie
          roofs.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {[
            { label: "Get a Quote →", href: "#contact", primary: true },
            { label: "Explore Our Work ↓", href: "#projects", primary: false },
          ].map((cta, i) => (
            <motion.a
              key={cta.href}
              href={cta.href}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 + i * 0.12, ease: EASE }}
              whileHover={{ y: -2 }}
              className={`label-eyebrow rounded-full px-7 py-4 transition-colors duration-300 ${
                cta.primary
                  ? "bg-on-dark text-charcoal hover:bg-sand"
                  : "border border-on-dark/35 text-on-dark hover:bg-on-dark/10"
              }`}
            >
              {cta.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
