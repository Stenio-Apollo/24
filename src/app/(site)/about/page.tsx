import Image from "next/image";
import { CheckCircle2, ShieldCheck, TimerReset, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionFrame } from "@/components/site/section-frame";

const principles = [
  {
    icon: TimerReset,
    title: "Speed with accountability",
    text: "Fast response backed by status updates and clear delivery confirmation."
  },
  {
    icon: ShieldCheck,
    title: "Operational reliability",
    text: "Dispatch process designed to reduce misses, delays, and handoff confusion."
  },
  {
    icon: Users,
    title: "People-first support",
    text: "A live team that helps solve logistics problems, not just move packages."
  }
];

export default function AboutPage() {
  return (
    <SectionFrame sectionClassName="bg-black text-white" prevButtonWrapperClassName="md:-translate-x-20">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_1fr]">
        <div className="page-enter space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">About</p>
          <h1 className="font-[var(--font-sora)] text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Logistics built by people who understand time pressure.
          </h1>
          <p className="max-w-xl leading-relaxed text-slate-300">
            24 Hour Express supports businesses that need deliveries to happen on schedule, every day. From medical runs
            to construction parts and legal documents, our operation is built around urgency and consistency.
          </p>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-orange-300">
            <CheckCircle2 className="h-4 w-4" /> Trusted by teams across Utah for recurring and on-demand delivery.
          </p>
        </div>

        <div className="grid gap-4">
          {principles.map((principle) => (
            <Card key={principle.title} className="page-enter border-white/15 bg-white/5 text-white">
              <CardContent className="flex items-start gap-3 p-6">
                <principle.icon className="mt-1 h-5 w-5 text-orange-300" />
                <div>
                  <h2 className="text-base font-semibold text-white">{principle.title}</h2>
                  <p className="mt-1 text-sm text-slate-300">{principle.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="page-enter team-grid mt-2 grid gap-5 md:mt-4 md:grid-cols-2">
        <article className="leader-card overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm transition-all duration-300">
          <div className="overflow-hidden rounded-2xl bg-white/5 p-3">
            <Image
              src="/images/Beau.jpg"
              alt="Beau, Founder and President"
              width={1400}
              height={1400}
              className="h-[340px] w-full object-contain transition-transform duration-500 hover:scale-[1.02] md:h-[440px]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <p className="pt-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">Founder &amp; President</p>
        </article>

        <article className="leader-card overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm transition-all duration-300">
          <div className="overflow-hidden rounded-2xl bg-white/5 p-3">
            <Image
              src="/images/Cody.jpg"
              alt="Cody, Vice President"
              width={1400}
              height={1400}
              className="h-[340px] w-full object-contain transition-transform duration-500 hover:scale-[1.02] md:h-[440px]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <p className="pt-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">Vice President</p>
        </article>
      </div>
    </SectionFrame>
  );
}
