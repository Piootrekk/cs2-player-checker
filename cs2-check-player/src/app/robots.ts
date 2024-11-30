import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const publicDomain = process.env.NEXT_PUBLIC_DOMAIN;
  if (!publicDomain) {
    throw new Error("NEXT_PUBLIC_DOMAIN is not set");
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${publicDomain}/sitemap.xml`,
  };
}
