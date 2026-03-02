import { ArrowRight, Clock3, MapPin, Truck } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionFrame } from "@/components/site/section-frame";
import { UnicornEmbed } from "@/components/site/unicorn-embed";

export default function HeroPage() {
  return (
    <SectionFrame sectionClassName="overflow-hidden bg-black pt-[4.25rem] md:pt-[5rem] lg:pt-[5.75rem]" hideNextButton>
      <div className="pointer-events-none absolute inset-0 z-0">
        <UnicornEmbed projectId="OroQFO7WfXrjxLO60Gt7" />
      </div>

      <div className="relative z-10 flex min-h-[70vh] items-end justify-center">
        <a
          href="#hero-content"
          className="mb-24 inline-flex items-center rounded-full border border-white/50 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/20 md:mb-48 lg:mb-56"
        >
          Scroll Down
        </a>
      </div>

      <div id="hero-content" className="relative z-10 mt-8 grid items-center gap-10 md:mt-14 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="page-enter text-xs font-semibold uppercase tracking-[0.2em] text-gray-200">24/7 dispatch team</p>
          <h1 className="page-enter font-[var(--font-sora)] text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Same-day shipping that moves at business speed.
          </h1>
          <p className="page-enter max-w-xl text-base leading-relaxed text-gray-200 md:text-lg">
            24 Hour Express delivers urgent freight, documents, and routed distribution across Utah with nationwide scale
            when your timeline cannot slip.
          </p>
          <div className="page-enter flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Request Dispatch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/15 hover:text-white">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
          <div className="page-enter flex flex-wrap items-center gap-5 border-l-2 border-emerald-400 pl-4 text-sm text-gray-200">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-300" /> Salt Lake City, UT
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-emerald-300" /> Open 24/7
            </span>
          </div>
        </div>

        <Card className="page-enter border-white/30 bg-black/30 p-1 text-white backdrop-blur-sm">
          <CardContent className="space-y-4 p-7">
            <h2 className="font-[var(--font-sora)] text-xl font-semibold text-white">Operational advantages</h2>
            <div className="rounded-xl border border-white/20 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Live dispatch support</p>
              <p className="mt-1 text-sm text-gray-200">Real people managing route changes, updates, and urgent pickups.</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">Flexible vehicle classes</p>
              <p className="mt-1 text-sm text-gray-200">From envelopes to palletized freight with the right vehicle for the load.</p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-200">
              <Truck className="h-4 w-4" /> Built for same-day delivery volume
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionFrame>
  );
}
