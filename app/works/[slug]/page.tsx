import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorksDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getWorksDetail(params.slug);

  const stripHTML = (html: string) => {
    return html.replace(/<[^>]+>/g, "");
  };

  const plainText = stripHTML(data.content || "");
  const description = plainText.slice(0, 100);

  return {
    title: data.title,
    description,
    openGraph: {
      title: data.title,
      description,
      images: [data?.thumbnail?.url ?? ""],
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getWorksDetail(params.slug).catch(notFound);

  return (
    <main>
      <div className={styles.articleInner}>
        <Article data={data} />
      </div>
    </main>
  );
}
