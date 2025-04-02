import Image from "next/image";
import styles from "./page.module.css";
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
            <div className={styles.link}>
              <Image
                className={styles.image}
                src="/no-image.png"
                alt=""
                width={1200}
                height={630}
              ></Image>
              <h3 className={styles.title}>{article.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
