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
    <main>
      <section className={styles.top}>
        <h1 className={styles.mainTitle}>portfolio</h1>
      </section>
      <section className={styles.works}>
        <div className={styles.heading}>
          <h2 className={styles.title}>WORKS</h2>
          <div className={styles.lines}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.worksInner}>
          <WorksList works={data.contents} />
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.heading}>
          <h2 className={styles.title}>CONTACT</h2>
          <div className={styles.lines}>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.contactInner}></div>
      </section>
    </main>
  );
}
