import type { MetadataRoute } from "next";
import { canonicalRoutes } from "@/lib/content/routes";
import { canonicalUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return canonicalRoutes.map((path) => ({
    url: canonicalUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/fat-freezing-liverpool/" ? 1 : path === "/" ? 0.9 : 0.7,
  }));
}
