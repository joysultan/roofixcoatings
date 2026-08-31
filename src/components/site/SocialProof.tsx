import { Reveal } from "@/components/motion/Reveal";

export function SocialProof() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-12">
        <div className="hairline grid gap-12 pt-14 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <Reveal>
            <p className="label-eyebrow text-muted-foreground">Trusted by homeowners</p>
            <p className="display-md mt-8 max-w-xl leading-tight">
              Every roof we restore is judged by the people who live under it.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="grid grid-cols-2 gap-10 self-end">
            <div>
              <p className="display-md text-eucalyptus">100%</p>
              <p className="label-eyebrow mt-3 text-muted-foreground">Recommend</p>
            </div>
            <div>
              <p className="display-md text-terracotta">45</p>
              <p className="label-eyebrow mt-3 text-muted-foreground">Reviews</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
