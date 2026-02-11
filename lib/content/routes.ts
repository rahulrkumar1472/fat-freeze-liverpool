import { areaPages } from "@/lib/content/areas";
import { articles } from "@/lib/content/articles";
import { concernPages } from "@/lib/content/concerns";
import { corePages } from "@/lib/content/core-pages";
import { legalPages } from "@/lib/content/legal-pages";

export const staticCanonicalRoutes = [
  ...Object.keys(corePages),
  "/articles/",
  "/fat-freezing/areas-we-treat/",
  "/concerns/",
  "/treatments/ultrasound-cavitation/",
  "/treatments/radio-frequency-skin-tightening/",
  ...Object.keys(legalPages),
];

export const canonicalRoutes = [
  ...new Set([
    ...staticCanonicalRoutes,
    ...areaPages.map((area) => area.path),
    ...concernPages.map((concern) => concern.path),
    ...articles.map((article) => article.path),
  ]),
].sort();

export const canonicalRouteMap = new Map(canonicalRoutes.map((route) => [route, route]));
