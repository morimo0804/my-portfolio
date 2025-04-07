import Image from "next/image";
import { getWorksDetail, getWorksList } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import WorksList from "../_components/WorksList";
import Heading from "@/app/_components/Heading";

export const revalidate = 60;

export default async function Page() {
  const { contents: works } = await getWorksList();

  return (
    <main className={styles.works}>
      <Heading title="WORKS" />
      <div className={styles.inner}>
        <WorksList works={works} />
      </div>
    </main>
  );
}
