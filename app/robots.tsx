import { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
  let robots: MetadataRoute.Robots = {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `https://brand.puffutoy.com/sitemap.xml`,
  };
  return robots;
}
