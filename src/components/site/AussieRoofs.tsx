import { MaskImage, Reveal, RevealLines } from "@/components/motion/Reveal";
import aussieRoofs from "@/assets/aussie-roofs.jpg";

export function AussieRoofs() {
  return (
    <section className="relative bg-background pb-24 lg:pb-36">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-12">
        <MaskImage
          src={aussieRoofs}
          alt="Aerial view of Australian suburban rooftops among eucalyptus trees"
          width={1920}
          height={1088}
          className="aspect-[16/9] w-full rounded-sm"
        />

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-lg max-w-3xl">
            <RevealLines lines={["Restoring and protecting", "Aussie roofs."]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm text-muted-foreground lg:pb-3">
              Roofix Coatings | Roof painting &amp; restoration specialist.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
