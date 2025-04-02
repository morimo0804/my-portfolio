import styles from "@/app/page.module.css";
import Image from "next/image";

import WorksList from "@/app/_components/WorksList";
import { Works } from "@/app/_libs/microcms";

const data: {
  contents: Works[];
} = {
  contents: [
    {
      id: "1",
      title: "作品タイトル",
    },
    {
      id: "2",
      title: "作品タイトル",
    },
    {
      id: "3",
      title: "作品タイトル",
    },
  ],
};

export default function Home() {
  return (
    <>
      <section className={styles.top}>
        <h1 className={styles.title}>portfolio</h1>
        <p className={styles.text}>ポートフォリオ</p>
      </section>
      <section className={styles.works}>
        <div className={styles.worksInner}>
          <h2 className={styles.worksTitle}>WORKS</h2>
          <WorksList works={data.contents} />
        </div>
      </section>
    </>
  );
}
