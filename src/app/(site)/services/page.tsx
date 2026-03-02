import { Clock3, Package, Plane, Route, Truck } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionFrame } from "@/components/site/section-frame";

const services = [
  {
    title: "Same-Day Courier",
    description: "Deadline-based deliveries across Utah with predictable dispatch windows.",
    icon: Truck
  },
  {
    title: "Hot Shot Delivery",
    description: "Immediate point-to-point dispatch for critical parts and legal documents.",
    icon: Clock3
  },
  {
    title: "Routed Distribution",
    description: "Scheduled pickups and optimized daily routes for recurring deliveries.",
    icon: Route
  },
  {
    title: "Freight & Pallets",
    description: "Box truck support for heavier shipments and business distribution loads.",
    icon: Package
  },
  {
    title: "Air Freight Coordination",
    description: "Escalated shipping options for national and time-critical lanes.",
    icon: Plane
  }
];

const extendedServices = [
  {
    title: "Warehousing",
    description:
      "We can warehouse your product for as long or as short as you need. If you are just out of room at your facility and need to warehouse a few pallets, we can help. Or take advantage of our long-term warehousing rates."
  },
  {
    title: "Open 24/7",
    description:
      "There are very few couriers in the state of Utah that are open 24 hours a day, so when you have an emergency in the middle of the night or on the weekend, we are here to help."
  },
  {
    title: "White Glove",
    description:
      "Special needs customer? Inside delivery? Two-man job? You need a White Glove Delivery service."
  },
  {
    title: "Helicopter/Jet Service",
    description:
      "If the cost of shutting down a machine or plant exceeds $2,500-$5,000 an hour, then you need our air service. We are one of the only courier companies in the state of Utah that offers a same-day delivery service anywhere in the United States via direct air delivery."
  }
];

export default function ServicesPage() {
  return (
    <SectionFrame>
      <div className="page-enter max-w-2xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
        <h1 className="font-[var(--font-sora)] text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Coverage built around urgency and consistency.
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="page-enter h-full">
            <CardHeader>
              <service.icon className="h-5 w-5 text-primary" />
              <CardTitle className="pt-2 text-lg">{service.title}</CardTitle>
              <CardDescription className="leading-relaxed text-slate-600">{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="page-enter rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm md:p-6">
        <h2 className="font-[var(--font-sora)] text-2xl font-semibold tracking-tight text-slate-900">More Services</h2>
        <div className="mt-4 space-y-3">
          {extendedServices.map((service) => (
            <details key={service.title} className="group rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                <span className="flex w-full items-center justify-between gap-3">
                  {service.title}
                  <span className="text-slate-500 transition group-open:rotate-180">⌄</span>
                </span>
              </summary>
              <p className="pt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
