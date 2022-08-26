import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetWordPressHOmePageAndPosts {
    pageBy(uri: "/") {
      title
      content
    }

    posts {
      nodes {
        title
        slug
        date
      }
    }
  }
`;

export const GET_SINGLE_POSTS = gql`
  query GetWordPressPosts {
    posts {
      nodes {
        slug
      }
    }
  }
`;
