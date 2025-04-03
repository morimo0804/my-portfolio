import { notFound } from "next/navigation";
import { getWorksDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getWorksDetail(params.slug).catch(notFound);

  return (
    <>
      <Article data={data} />
    </>
  );
}
