import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Heading from "@/app/_components/Heading";

export const metadata = {
  title: "ABOUT",
};

export default function Page() {
  return (
    <main className={styles.about}>
      <Heading title="ABOUT" />
      <section className={styles.info}>
        <div className={styles.infoInner}>
          <Image
            className={styles.image}
            src="/my-photo.jpg"
            alt=""
            width={320}
            height={320}
            loading="eager"
          />
          <div className={styles.side}>
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
                <dt>保有資格：</dt>
                <dd>
                  ITパスポート / 色彩検定3級 /
                  Webクリエイター能力認定試験エキスパート
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <div className={styles.inner}>
        <section className={styles.comment}>
          <div className={styles.subInner}>
            <h3 className={styles.subTitle}>comment</h3>
          </div>
          <div className={styles.text}>
            <p>
              2024年3月からトライデントコンピュータ専門学校のWebデザイン学科に入学してサイト制作の勉強をしています。
              <br />
              志望職種はフロントエンドエンジニア、Webデザイナー、Webエンジニアです。HTML、CSS、JavaScriptの基本的な知識の勉強をしており、WordPressやmicroCMSなどのCMSを使った作品も制作経験があります。現在はNext.jsの勉強を進めており、今後もいろいろな技術を勉強していきたいと思っています。
            </p>
          </div>
        </section>
        <section className={styles.skill}>
          <div className={styles.subInner}>
            <h3 className={styles.subTitle}>skill</h3>
          </div>
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
                    src="/tailwindcss.svg"
                    alt="tailwindcss"
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
                <li>
                  <Image
                    className={styles.logo}
                    src="/nextjs.svg"
                    alt="next.js"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/wordpress.png"
                    alt="wordpress"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className={styles.logo}
                    src="/icon-black.png"
                    alt="microCMS"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </li>
              </ul>
            </dd>
            <dd className={styles.text}>
              <p>
                HTML、CSS、JavaScriptといった基本的な知識を勉強しています。
                <br />
                また、WordPressやmicroCMSなどのCMSにも触れた経験があり、基礎的な操作方法を学びました。デザインを再現しながら、読みやすく綺麗なコードを書くことを心がけており、まだ触れたことのない技術に挑戦することも大切にしています。現在は、Next.jsやTailwind
                CSSを自主的に学習しています。
              </p>
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
            <dd className={styles.text}>
              <p>
                Photoshop、Illustrator、Figmaの基本的な操作ができます。
                <br />
                視認性やレイアウトバランス、配色などを意識したデザインを心がけており、見る人にとってわかりやすく、心地のよいデザインを目指しています。コーディングを見据えた設計を意識しながら、サイトデザインに取り組んでいます。
              </p>
            </dd>
          </dl>
        </section>
      </div>
    </main>
  );
}
