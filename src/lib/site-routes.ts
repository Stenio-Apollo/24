export type SiteRoute = {
  href: string;
  label: string;
  eyebrow: string;
  title: string;
};

export const siteRoutes: SiteRoute[] = [
  {
    href: "/hero",
    label: "Hero",
    eyebrow: "24/7 Utah Dispatch",
    title: "Same-day delivery without friction"
  },
  {
    href: "/services",
    label: "Services",
    eyebrow: "Core Services",
    title: "Courier, routed, and expedited operations"
  },
  {
    href: "/about",
    label: "About",
    eyebrow: "Who We Are",
    title: "Built for urgent business logistics"
  },
  {
    href: "/coverage",
    label: "Coverage",
    eyebrow: "Network",
    title: "Statewide Utah routes with national reach"
  },
  {
    href: "/pricing",
    label: "Pricing",
    eyebrow: "Simple Pricing",
    title: "Transparent rates matched to urgency"
  },
  {
    href: "/contact",
    label: "Contact",
    eyebrow: "Get Started",
    title: "Request your next shipment"
  }
];

export function getRouteIndex(pathname: string): number {
  return siteRoutes.findIndex((route) => route.href === pathname);
}
