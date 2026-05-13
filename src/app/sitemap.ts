import type { MetadataRoute } from "next";
import { publicPages, siteConfig } from "@/lib/site-config";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified,
    changeFrequency: page.priority >= 0.8 ? "monthly" : "yearly",
    priority: page.priority,
  }));
}
