import Link from "next/link";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.version}>Version: 14.5.6</div>
      <ul className={styles.links}>
        <li>
          <Link href="#">Docs</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="#">API</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="#">Help</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="#">Community</Link>
        </li>
      </ul>
      <div className={styles.logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-small.svg" alt="logo" />
      </div>
    </footer>
  );
}
