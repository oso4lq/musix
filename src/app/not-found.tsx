import Link from "next/link";
import styles from "../app/not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.containerNf}>
        <h1 className={styles.containerH1}>404</h1>
        <h3 className={styles.containerH3}>
          Page not found
        </h3>
        <p className={styles.containerP}>It may have been deleted or moved to another address</p>
        <Link className={styles.containerLink} href="/">
          <p className={styles.containerLinkP}>Back to main page</p>
        </Link>
      </div>
    </div>
  );
}
