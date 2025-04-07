import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">HAYATO PORTFOLIO</Link>
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/works">WORKS</Link>
          </li>
          <li>
            <Link href="/#area1">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
