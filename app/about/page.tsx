import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Heading from "@/app/_components/Heading";

export default function Page() {
  return (
    <main className={styles.about}>
      <Heading title="ABOUT" />
      <div className={styles.inner}>
        <section className={styles.info}>
          <div className={styles.name}>
            <h1 className={styles.title}>森茂勇斗</h1>
            <small className={styles.subText}>（もりも　はやと）</small>
          </div>
          <p>トライデントコンピュータ専門学校　Webデザイン学科</p>
          <dl className={styles.contents}>
            <div className={styles.content}>
              <dt>生年月日：</dt>
              <dd>2005年8月4日</dd>
            </div>
            <div className={styles.content}>
              <dt>趣味：</dt>
              <dd>犬と遊ぶこと、グッズ集め</dd>
            </div>
            <div className={styles.content}>
              <dt>資格：</dt>
              <dd>
                ITパスポート / 色彩検定3級 /
                Webクリエイター能力認定試験エキスパート
              </dd>
            </div>
          </dl>
        </section>
        <section className={styles.comment}>
          <h3 className={styles.subTitle}>comment</h3>
          <div className={styles.text}>
            <p>
              2024年3月からトライデントコンピュータ専門学校のWebデザイン学科に入学してサイト制作の勉強をしています。将来はフロントエンドエンジニアを目指しています。HTML、CSS、JavaScriptの基本的な知識の勉強をしており、WordPressやmicroCMSなどのCMSを使った作品も制作経験があります。現在はNext.jsの勉強を進めており、今後もいろいろな技術を勉強していきたいと思っています。
            </p>
          </div>
        </section>
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
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/css.png"
                    alt="CSS"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/sass.png"
                    alt="Sass"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/js.png"
                    alt="JavaScript"
                    width={60}
                    height={60}
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
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/illustrator.png"
                    alt="Illustrator"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/Figma.png"
                    alt="Figma"
                    width={60}
                    height={60}
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
