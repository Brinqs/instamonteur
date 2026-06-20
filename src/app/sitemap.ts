import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const steden = [
  "rotterdam",
  "den-haag",
  "dordrecht",
  "delft",
  "leiden",
  "zoetermeer",
  "gouda",
  "schiedam",
  "vlaardingen",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const stadenUrls: MetadataRoute.Sitemap = steden.map((stad) => ({
    url: `${base}/steden/${stad}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/diensten`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/diensten/cv-ketel`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/diensten/loodgieter`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/diensten/warmtepomp-installatie`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/over-ons`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...stadenUrls,
  ];
}
