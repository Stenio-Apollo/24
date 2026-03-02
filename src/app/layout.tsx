import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap"
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://24-hourexpress.com"),
  title: "24 Hour Express | Same-Day Courier & Shipping in Utah",
  description:
    "24 Hour Express provides same-day courier, hot shot delivery, routed distribution, and warehousing from Salt Lake City across Utah and nationwide.",
  keywords: [
    "same-day courier Utah",
    "Salt Lake City delivery service",
    "24 hour courier",
    "hot shot delivery",
    "warehouse and distribution Utah"
  ],
  openGraph: {
    title: "24 Hour Express | Same-Day Courier & Shipping",
    description: "Open 24/7 courier and logistics solutions for Utah businesses and urgent deliveries nationwide.",
    url: "https://24-hourexpress.com",
    siteName: "24 Hour Express",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "24 Hour Express | Same-Day Courier & Shipping",
    description: "Reliable same-day courier and logistics solutions in Utah, available 24/7."
  },
  alternates: {
    canonical: "/hero"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={`${plusJakarta.variable} ${sora.variable} font-[var(--font-plus-jakarta)]`}>{children}</body>
    </html>
  );
}
