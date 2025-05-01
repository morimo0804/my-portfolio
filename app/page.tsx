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
        <div className={styles.circleWrapper}>
          <Image
            className={`${styles.circle} ${styles.circle1}`}
            src="/circle1.png"
            alt=""
            width={500}
            height={500}
          />
          <Image
            className={`${styles.circle} ${styles.circle2}`}
            src="/circle2.png"
            alt=""
            width={350}
            height={350}
          />
          <Image
            className={`${styles.circle} ${styles.circle3}`}
            src="/circle3.png"
            alt=""
            width={200}
            height={200}
          />
        </div>
      </section>
      <section id="area1" className={styles.contact}>
        <Heading title="CONTACT" />
        <div className={styles.contactInner}>
          <p className={styles.text}>お気軽にお問い合わせください。</p>
          <dl className={styles.items}>
            <div className={styles.item}>
              <dt>Gmail：</dt>
              <dd>hayato.morimo.0804@gmail.com</dd>
            </div>
            <div className={styles.item}>
              <dt>GitHub：</dt>
              <dd>
                <Link
                  href="https://github.com/morimo0804"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/morimo0804
                </Link>
              </dd>
            </div>
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
