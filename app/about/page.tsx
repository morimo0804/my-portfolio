import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Heading from "@/app/_components/Heading";

export default function Page() {
  return (
    <main className={styles.about}>
      <Heading title="ABOUT" />
      <div className={styles.inner}>
        <section className={styles.info}></section>
        <section className={styles.skill}>
          <h3 className={styles.subTitle}>skill</h3>
          <dl className={styles.items}>
            <dt className={styles.catch}>コーディング</dt>
            <dd>
              <ul className={styles.logoList}>
                <li>
                  <Image
                    className={styles.logo}
                    src="/HTML5_Logo.png"
                    alt="HTML"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/css.png"
                    alt="CSS"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/sass.png"
                    alt="Sass"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/js.png"
                    alt="JavaScript"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </li>
              </ul>
            </dd>
            <dt className={styles.catch}>デザイン</dt>
            <dd>
              <ul className={styles.logoList}>
                <li>
                  <Image
                    className={styles.logo}
                    src="/photoshop.png"
                    alt="Photoshop"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/illustrator.png"
                    alt="Illustrator"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/Figma.png"
                    alt="Figma"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </li>
              </ul>
            </dd>
          </dl>
        </section>
      </div>
    </main>
  );
}
