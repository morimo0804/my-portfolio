import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className={styles.item}>
            <Link href="/works">WORKS</Link>
          </li>
          <li className={styles.item}>
            <Link href="/#area1">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <small className={styles.copy}>©2025 hayato morimo</small>
    </footer>
  );
}
