import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/digital-assets", "/privacy", "/terms", "/legal", "/thank-you"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    }),
  );
}
