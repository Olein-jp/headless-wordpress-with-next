import Head from "next/head";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { GET_ALL_POSTS } from "../lib/queries";

export default function Home({ posts, title, content }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />

        <ul>
          {posts.map(({ title, slug, date }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>
                  [{date}] {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const result = await client.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      posts: result.data.posts.nodes,
      title: result.data.pageBy.title,
      content: result.data.pageBy.content,
    },
  };
}
