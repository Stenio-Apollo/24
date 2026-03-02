import { RouteScroller } from "@/components/site/route-scroller";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { SiteNav } from "@/components/site/site-nav";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "24 Hour Express",
  telephone: "+1-801-330-6151",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2930 W Directors Row",
    addressLocality: "Salt Lake City",
    addressRegion: "UT",
    postalCode: "84104",
    addressCountry: "US"
  },
  areaServed: "Utah, United States",
  openingHours: "Mo-Su 00:00-23:59",
  url: "https://24-hourexpress.com",
  priceRange: "$$",
  description:
    "Same-day courier, routed distribution, hot shots, warehousing, and expedited delivery for Utah and nationwide coverage."
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <ScrollProgress />
      <SiteNav />
      <RouteScroller />
      {children}
    </>
  );
}
