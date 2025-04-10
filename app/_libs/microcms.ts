import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Works = {
  title: string;
  metaInfo?: {
    label: string;
    value: string;
  }[];
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

export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
  });
  return detailData;
};

export const getAllWorksList = async () => {
  const listData = await client.getAllContents<Works>({
    endpoint: "works",
  });

  return listData;
};
