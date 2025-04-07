import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { s } from "framer-motion/client";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
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
      </div>
    </header>
  );
}
