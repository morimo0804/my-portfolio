import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Menbers = {
  name: string;
} & MicroCMSListContent;

export type Works = {
  title: string;
  content: string;
  thumbnail?: MicroCMSImage;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVISE_DOMAIN) {
  throw new Error("MICROCMS_SERVISE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVISE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Works>({
    endpoint: "works",
    queries,
  });
  return listData;
};
