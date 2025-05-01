import Image from "next/image";
import { getWorksDetail, getWorksList } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import WorksList from "../_components/WorksList";
import Heading from "@/app/_components/Heading";

export default async function Page() {
  const { contents: works } = await getWorksList();

  return (
    <main className={styles.works}>
      <Heading title="WORKS" />
      <div className={styles.inner}>
        <WorksList works={works} />
      </div>
      <div className={styles.circleWrapper}>
        <Image
          className={`${styles.circle} ${styles.circle1}`}
          src="/circle1.png"
          alt=""
          width={500}
          height={500}
          priority
        />
        <Image
          className={`${styles.circle} ${styles.circle2}`}
          src="/circle2.png"
          alt=""
          width={350}
          height={350}
          priority
        />
        <Image
          className={`${styles.circle} ${styles.circle3}`}
          src="/circle3.png"
          alt=""
          width={200}
          height={200}
          priority
        />
      </div>
    </main>
  );
}
