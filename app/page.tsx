import { motion } from "framer-motion";

import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getWorksList } from "@/app/_libs/microcms";
import { WORKS_LIST_LIMIT } from "./_constants";
import MainTitle from "@/app/_components/MainTitle";
import Heading from "@/app/_components/Heading";
import WorksList from "@/app/_components/WorksList";

export const revalidate = 60;

export default async function Home() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

  return (
    <main>
      <section className={styles.top}>
        <MainTitle text="PORTFOLIO" />
        {Array.from({ length: 10 }).map((_, index) => {
          const isTop = Math.random() < 0.5;
          const top = isTop ? -20 : Math.floor(Math.random() * 100);
          const left = isTop ? Math.floor(Math.random() * 100) : 105;

          const delay = (Math.random() * 5).toFixed(1);

          return (
            <div
              key={index}
              className={styles.shootingStar}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
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
