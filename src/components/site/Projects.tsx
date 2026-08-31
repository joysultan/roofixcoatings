import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { ReelSlot } from "@/components/site/ReelSlot";

/**
 * Add your 3 real Roofix Coatings reels here.
 * Drop the files in `public/videos/` and set `src` below, e.g. src: "/videos/reel-01.mp4".
 */
const REELS: { number: string; label: string; src?: string }[] = [
  { number: "01", label: "Roof Painting" },
  { number: "02", label: "Roof Restoration" },
  { number: "03", label: "Roof Protection" },
];

export function Projects() {
  return (
    <section id="projects" className="gradient-sand py-24 lg:py-36">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-lg">
            <RevealLines lines={["Recent projects"]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm text-muted-foreground lg:pb-3">
              Real work from Aussie rooftops, shot on site.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-12">
          {REELS.map((reel, i) => (
            <Reveal key={reel.number} delay={i * 0.1} y={40}>
              <ReelSlot number={reel.number} label={reel.label} src={reel.src} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
