import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicDomain = process.env.NEXT_PUBLIC_DOMAIN;
  if (!publicDomain) {
    throw new Error("NEXT_PUBLIC_DOMAIN is not set");
  }
  return [
    {
      url: publicDomain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
