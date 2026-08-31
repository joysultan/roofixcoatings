import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { RevealLines } from "@/components/motion/Reveal";
import storyRoof from "@/assets/story-roof.jpg";

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-6%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.12, 1]);

  return (
    <section ref={ref} className="surface-dark overflow-hidden py-24 lg:py-36">
      <div className="mx-auto grid max-w-[110rem] items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <h2 className="display-lg text-on-dark">
          <RevealLines lines={["A roof", "can change", "the whole home."]} />
        </h2>

        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <motion.img
            src={storyRoof}
            alt="Australian residential rooftops at dusk"
            loading="lazy"
            width={1408}
            height={1760}
            style={{ y, scale }}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
