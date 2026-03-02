import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionFrame } from "@/components/site/section-frame";

const tiers = [
  {
    title: "Local Same-Day",
    detail: "Best for standard metro and regional lanes.",
    points: ["Route-based pricing", "Business account billing", "Pickup and delivery confirmation"]
  },
  {
    title: "Priority Hot Shot",
    detail: "Immediate dispatch for urgent jobs.",
    points: ["Direct-to-destination run", "After-hours availability", "Expedited driver assignment"]
  },
  {
    title: "Dedicated Route Plans",
    detail: "For recurring daily or weekly volume.",
    points: ["Custom route optimization", "Volume discounts", "Account-level dispatch coordination"]
  }
];

export default function PricingPage() {
  return (
    <SectionFrame>
      <div className="page-enter max-w-2xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pricing</p>
        <h1 className="font-[var(--font-sora)] text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Clear pricing based on route, urgency, and load.
        </h1>
        <p className="text-slate-600">
          Every quote is tailored to mileage, vehicle class, and delivery window. We keep pricing transparent so your
          team can make fast decisions.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.title} className="page-enter">
            <CardHeader>
              <CardTitle>{tier.title}</CardTitle>
              <CardDescription>{tier.detail}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                {tier.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionFrame>
  );
}
