import { motion } from "motion/react";
import { Reveal, RevealLines } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="gradient-cta text-on-dark">
      <div className="mx-auto max-w-[110rem] px-6 py-28 lg:px-12 lg:py-40">
        <h2 className="display-lg max-w-3xl text-on-dark">
          <RevealLines lines={["Ready to restore", "your roof?"]} />
        </h2>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-on-dark-muted">
            Talk to Roofix Coatings about your roof painting and restoration needs.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-12">
          <motion.a
            href="tel:+61493741674"
            whileHover={{ y: -2 }}
            className="label-eyebrow inline-flex rounded-full bg-on-dark px-8 py-4 text-charcoal transition-colors duration-300 hover:bg-sand"
          >
            Get a Quote →
          </motion.a>
        </Reveal>

        <Reveal delay={0.35} className="mt-16 border-t border-on-dark/20 pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <a
              href="tel:+61493741674"
              className="display-md text-on-dark transition-opacity hover:opacity-70"
            >
              +61 493 741 674
            </a>
            <a
              href="mailto:roofcoatingss@gmail.com"
              className="text-lg text-on-dark-muted transition-colors hover:text-on-dark sm:self-end"
            >
              roofcoatingss@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="surface-dark">
      <div className="mx-auto flex max-w-[110rem] flex-col gap-4 px-6 py-10 text-on-dark-muted sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <span className="label-eyebrow text-on-dark">Roofix Coatings</span>
        <span className="text-xs">Restoring and protecting Aussie roofs.</span>
        <span className="text-xs">© {new Date().getFullYear()} Roofix Coatings</span>
      </div>
    </footer>
  );
}
