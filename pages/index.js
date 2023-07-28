import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import NewsApp from "./posts/NewsApp";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <h2>Read all things AI, filtered by popular articles</h2>
      <section className={utilStyles.headingMd}>
        <NewsApp />
      </section>
    </Layout>
  );
}
