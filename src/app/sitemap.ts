import type { MetadataRoute } from "next";

const pages = ["/", "/hero", "/services", "/about", "/coverage", "/pricing", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `https://24-hourexpress.com${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "/" || page === "/hero" ? 1 : 0.8
  }));
}
