import Image from "next/image";
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
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
