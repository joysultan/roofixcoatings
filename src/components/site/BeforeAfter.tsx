import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import beforeRoof from "@/assets/before-roof.jpg";
import afterRoof from "@/assets/after-roof.jpg";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [setFromClientX]);

  return (
    <section id="before-after" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-lg max-w-2xl">
            <RevealLines lines={["See the", "transformation."]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="label-eyebrow text-muted-foreground lg:pb-3">Drag to compare</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14 lg:mt-20">
          <div
            ref={containerRef}
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            className="relative aspect-[16/11] w-full touch-none select-none overflow-hidden rounded-sm border border-border shadow-refined"
          >
            <img
              src={afterRoof}
              alt="Australian home after roof restoration and painting"
              loading="lazy"
              width={1600}
              height={1104}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div
              className="absolute inset-0 h-full w-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <img
                src={beforeRoof}
                alt="Weathered Australian tile roof before restoration"
                loading="lazy"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <span className="label-eyebrow absolute left-4 top-4 rounded-full bg-charcoal/70 px-3 py-1.5 text-on-dark backdrop-blur">
              Before
            </span>
            <span className="label-eyebrow absolute right-4 top-4 rounded-full bg-charcoal/70 px-3 py-1.5 text-on-dark backdrop-blur">
              After
            </span>

            <div
              className="absolute inset-y-0 z-10 w-px bg-on-dark/90"
              style={{ left: `${position}%` }}
            >
              <div
                role="slider"
                tabIndex={0}
                aria-label="Before and after comparison"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(position)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
                  if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
                }}
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-on-dark/50 bg-charcoal/60 text-on-dark backdrop-blur-md transition-transform duration-300 hover:scale-105"
              >
                <span aria-hidden className="text-sm tracking-[0.1em]">
                  ‹ ›
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
