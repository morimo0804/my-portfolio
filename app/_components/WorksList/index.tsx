import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { Works } from "@/app/_libs/microcms";

type Props = {
  works: Works[];
};

export default function WorksList({ works }: Props) {
  return (
    <>
      <ul className={styles.worksContent}>
        {works.map((article) => (
          <li key={article.id} className={styles.list}>
            <Link href={`/works/${article.id}`} className={styles.link}>
              {article.thumbnail ? (
                <Image
                  className={styles.image}
                  src={article.thumbnail.url}
                  alt=""
                  width={article.thumbnail.width}
                  height={article.thumbnail.height}
                />
              ) : (
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt="No Image"
                  width={2944}
                  height={1618}
                />
              )}
              <h3 className={styles.title}>{article.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
