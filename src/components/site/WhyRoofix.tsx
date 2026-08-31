import { Reveal, RevealLines } from "@/components/motion/Reveal";

const PRINCIPLES = [
  { title: "Restore", copy: "Give tired roofs a refreshed appearance." },
  { title: "Protect", copy: "Help protect the roof and home with proper restoration work." },
  { title: "Refresh", copy: "Transform the overall look of the property." },
];

export function WhyRoofix() {
  return (
    <section id="why-roofix" className="surface-dark py-24 lg:py-36">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-12">
        <h2 className="display-lg max-w-3xl">
          <RevealLines lines={["Restore.", "Protect.", "Refresh."]} />
        </h2>

        <div className="mt-16 grid gap-px border-t border-on-dark/15 md:grid-cols-3 lg:mt-24">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="border-b border-on-dark/15 py-10 md:border-b-0 md:border-r md:last:border-r-0 md:pr-10"
            >
              <span className="label-eyebrow text-terracotta">{`0${i + 1}`}</span>
              <h3 className="display-md mt-6 text-on-dark">{p.title}</h3>
              <p className="mt-4 max-w-xs text-on-dark-muted">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
