import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import { GET_ALL_POSTS, GET_SINGLE_POSTS } from "../../lib/queries";

export default function BlogPage({ post }) {
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: GET_ALL_POSTS,
  });

  return {
    paths: result.data.posts.nodes.map(({ slug }) => {
      return {
        params: { slug: decodeURI(slug) },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const result = await client.query({
    query: GET_SINGLE_POSTS,
    variables: { slug },
  });

  return {
    props: {
      post: result.data.postBy,
    },
  };
}
