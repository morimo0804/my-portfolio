import { motion } from "framer-motion";

import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getWorksList } from "@/app/_libs/microcms";
import { WORKS_LIST_LIMIT } from "./_constants";
import MainTitle from "@/app/_components/MainTitle";
import Heading from "@/app/_components/Heading";
import WorksList from "@/app/_components/WorksList";

export default async function Home() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

  return (
    <main>
      <section className={styles.top}>
        <MainTitle text="PORTFOLIO" />
      </section>
      <section className={styles.works}>
        <Heading title="WORKS" />
        <div className={styles.worksInner}>
          <WorksList works={data.contents} />
        </div>
      </section>
      <section id="area1" className={styles.contact}>
        <Heading title="CONTACT" />
        <div className={styles.contactInner}>
          <p className={styles.text}>お気軽にお問い合わせください。</p>
          <dl className={styles.items}>
            <dt>Gmail：</dt>
            <dd>hayato.morimo.0804@gmail.com</dd>
          </dl>
          <Link
            className={styles.btn}
            href="mailto:hayato.morimo.0804@gmail.com"
          >
            <span>お問い合わせはこちら</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
