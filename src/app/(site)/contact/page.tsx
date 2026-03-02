import { MapPin, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionFrame } from "@/components/site/section-frame";

export default function ContactPage() {
  return (
    <SectionFrame>
      <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="page-enter space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="font-[var(--font-sora)] text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Let&apos;s dispatch your next shipment.
          </h1>
          <p className="text-slate-600">
            Share pickup and delivery details and our team will respond with the fastest practical option.
          </p>
          <div className="space-y-3 text-sm text-slate-700">
            <p className="inline-flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-primary" /> (801) 330-6151
            </p>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> 2930 W Directors Row, Salt Lake City, UT 84104
            </p>
          </div>
        </div>

        <Card className="page-enter border-slate-200 bg-white/95 p-6">
          <form className="grid gap-3" action="#" method="post">
            <label className="text-sm font-medium text-slate-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-primary"
              placeholder="Your name"
              required
            />
            <label className="text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-primary"
              placeholder="you@company.com"
              required
            />
            <label className="text-sm font-medium text-slate-700" htmlFor="details">
              Shipment details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
              placeholder="Pickup location, delivery location, size, and deadline"
            />
            <div className="pt-1">
              <Button type="submit">Request Quote</Button>
            </div>
          </form>
        </Card>
      </div>
    </SectionFrame>
  );
}
