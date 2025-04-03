import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt=""
          width={348}
          height={133}
          priority
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/">WORKS</Link>
          </li>
          <li>
            <Link href="/">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
