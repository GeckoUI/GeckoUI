import { source } from "@/lib/source";
import type { MetadataRoute } from "next";

export const revalidate = false;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://geckoui.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return source.getPages().map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.url === "/docs" ? 1 : 0.8
  }));
}
