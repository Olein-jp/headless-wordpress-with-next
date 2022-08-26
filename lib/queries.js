import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      nodes {
        title
        slug
        date
      }
    }
  }
`;

export const GET_HOME_PAGE = gql`
  query GetHomePage {
    pageBy(uri: "/") {
      title
      content
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
