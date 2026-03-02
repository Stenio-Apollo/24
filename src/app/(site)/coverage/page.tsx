import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { SectionFrame } from "@/components/site/section-frame";

const corridors = ["Logan", "Ogden", "Salt Lake City", "Provo", "Orem", "Price", "St. George", "Nationwide"];
const sectors = ["Medical", "Legal", "Construction", "Retail", "Automotive", "Manufacturing"];
const coveragePoints = [
  {
    title: "Daily Utah lanes",
    text: "Frequent runs across key corridors keep same-day operations predictable."
  },
  {
    title: "Escalation ready",
    text: "Dedicated dispatch and urgent routing for high-priority shipments."
  },
  {
    title: "National reach",
    text: "Air and long-distance coordination when deliveries must leave the state."
  }
];

export default function CoveragePage() {
  return (
    <SectionFrame sectionClassName="bg-black text-white" prevButtonWrapperClassName="md:-translate-x-16">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_1fr]">
        <div className="page-enter space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Coverage</p>
          <h1 className="font-[var(--font-sora)] text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Utah-first network with U.S. delivery reach.
          </h1>
          <p className="max-w-xl leading-relaxed text-slate-300">
            Our daily route structure covers major Utah lanes, while dedicated mileage runs and partner channels extend
            to regional and national destinations.
          </p>
        </div>

        <div className="grid gap-4">
          {coveragePoints.map((point) => (
            <Card key={point.title} className="page-enter border-white/15 bg-white/5 text-white">
              <CardContent className="p-6">
                <h2 className="text-base font-semibold text-white">{point.title}</h2>
                <p className="mt-1 text-sm text-slate-300">{point.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-12">
        <article className="page-enter overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm transition-all duration-300 md:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
            <Image
              src="/images/Map_Fotor.png"
              alt="Service area map"
              width={2000}
              height={1100}
              className="h-[220px] w-full object-contain transition-transform duration-500 hover:scale-[1.02] md:h-[320px]"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
          </div>
        </article>

        <article className="page-enter overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm transition-all duration-300 md:col-span-4">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
            <Image
              src="/images/Packaging.png"
              alt="Packaged shipments ready for delivery"
              width={1600}
              height={1200}
              className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-[1.03] md:h-[320px]"
              sizes="(min-width: 768px) 34vw, 100vw"
            />
          </div>
        </article>

        <Card className="page-enter border-white/15 bg-white/5 p-6 text-white md:col-span-5">
          <h2 className="font-[var(--font-sora)] text-xl font-semibold">Primary Utah Corridors</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {corridors.map((corridor) => (
              <div key={corridor} className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-slate-100">
                {corridor}
              </div>
            ))}
          </div>
        </Card>

        <Card className="page-enter border-white/15 bg-white/5 p-6 text-white md:col-span-4">
          <h2 className="font-[var(--font-sora)] text-xl font-semibold text-white">Industries We Support</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {sectors.map((sector) => (
              <div key={sector} className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-slate-200">
                {sector}
              </div>
            ))}
          </div>
        </Card>

        <article className="page-enter overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm transition-all duration-300 md:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
            <Image
              src="/images/Places.png"
              alt="Utah coverage locations"
              width={1400}
              height={1000}
              className="h-[240px] w-full object-contain transition-transform duration-500 hover:scale-[1.02] md:h-[300px]"
              sizes="(min-width: 768px) 25vw, 100vw"
            />
          </div>
        </article>

        <article className="page-enter overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm transition-all duration-300 md:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
            <Image
              src="/images/Delivering.png"
              alt="Driver delivering shipments"
              width={1700}
              height={1100}
              className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-[1.03] md:h-[300px]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </article>

        <article className="page-enter overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm transition-all duration-300 md:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
            <Image
              src="/images/Body.png"
              alt="Logistics operations and transport"
              width={1700}
              height={1100}
              className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-[1.03] md:h-[300px]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </article>
      </div>
    </SectionFrame>
  );
}
