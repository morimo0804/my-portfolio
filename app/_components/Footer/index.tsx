import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/about">ABOUT</a>
          </li>
          <li className={styles.item}>
            <a href="/works">WORKS</a>
          </li>
          <li className={styles.item}>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <small className={styles.copy}>©2025 hayato morimo</small>
    </footer>
  );
}
