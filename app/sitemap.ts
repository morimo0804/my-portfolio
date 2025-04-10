import { MetadataRoute } from "next";
import { getAllWorksList } from "./_libs/microcms";

const buildUrl = (path?: string) =>
  `https://portfolio-0804.vercel.app/${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const worksContents = await getAllWorksList();

  const worksUrls: MetadataRoute.Sitemap = worksContents.map((content) => ({
    url: buildUrl(`/works/${content.id}`),
    lastModified: content.revisedAt,
  }));

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/about"),
      lastModified: now,
    },
    {
      url: buildUrl("/works"),
      lastModified: now,
    },
    ...worksUrls,
  ];
}
