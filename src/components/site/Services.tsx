import { Reveal, RevealLines } from "@/components/motion/Reveal";
import painting from "@/assets/service-painting.jpg";
import restoration from "@/assets/service-restoration.jpg";
import protection from "@/assets/service-protection.jpg";

const SERVICES = [
  {
    number: "01",
    title: "Roof Painting",
    copy: "Roof coating applied with care for a clean, even finish.",
    image: painting,
    alt: "Roof coating being spray-applied to tiles",
  },
  {
    number: "02",
    title: "Roof Restoration",
    copy: "Restoration work that brings a tired roof back to life.",
    image: restoration,
    alt: "Roofer restoring ridge capping on a tile roof",
  },
  {
    number: "03",
    title: "Roof Protection",
    copy: "Protective finishes that help keep the roof in good shape.",
    image: protection,
    alt: "Detail of a freshly coated protective roof surface",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-lg">
            <RevealLines lines={["Roof restoration,", "done right."]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="label-eyebrow text-muted-foreground lg:pb-3">Our Services</p>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.06}>
              <a
                href="#contact"
                className="group hairline flex flex-col gap-8 py-10 md:flex-row md:items-center md:gap-14 lg:py-14"
              >
                <span className="label-eyebrow w-12 shrink-0 text-muted-foreground/60 transition-opacity duration-500 group-hover:opacity-100 md:opacity-40">
                  {service.number}
                </span>

                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-sm bg-muted md:aspect-[5/4] md:w-64 lg:w-80">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    width={1200}
                    height={1504}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>

                <div className="flex-1 transition-transform duration-700 ease-out md:group-hover:translate-x-3">
                  <h3 className="display-md">{service.title}</h3>
                  <p className="mt-4 max-w-md text-muted-foreground">{service.copy}</p>
                </div>

                <span
                  aria-hidden
                  className="text-2xl text-muted-foreground transition-all duration-500 group-hover:translate-x-2 group-hover:text-terracotta"
                >
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
