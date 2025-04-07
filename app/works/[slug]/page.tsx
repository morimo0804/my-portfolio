import { notFound } from "next/navigation";
import { getWorksDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import styles from "./page.module.css";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getWorksDetail(params.slug).catch(notFound);

  return (
    <>
      <div className={styles.articleInner}>
        <Article data={data} />
      </div>
    </>
  );
}
