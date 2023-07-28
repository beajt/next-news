import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

const name = "AI Access Almanac";
export const siteTitle = "";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head></Head>
      <header className={styles.header}>
        {home ? (
          <h1>{name}</h1>
        ) : (
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
