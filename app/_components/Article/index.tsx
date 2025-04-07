import Image from "next/image";
import Link from "next/link";
import type { Works } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  data: Works;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      {data.thumbnail && (
        <Image
          className={styles.thumbnail}
          src={data.thumbnail.url}
          alt=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      {data.metaInfo && data.metaInfo.length > 0 && (
        <dl className={styles.metaInfo}>
          {data.metaInfo.map((item, index) => (
            <div className={styles.info} key={index}>
              <dt>{item.label}</dt>
              <dd dangerouslySetInnerHTML={{ __html: item.value }} />
            </div>
          ))}
        </dl>
      )}
      {data.content && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        />
      )}
      <Link className={styles.btn} href="/works">
        <span>WORKS一覧へ</span>
      </Link>
    </main>
  );
}
