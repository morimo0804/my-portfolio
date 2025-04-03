import styles from "@/app/page.module.css";
import Image from "next/image";
import { getWorksList } from "@/app/_libs/microcms";
import { WORKS_LIST_LIMIT } from "./_constants";
import WorksList from "@/app/_components/WorksList";

export default async function Home() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

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
