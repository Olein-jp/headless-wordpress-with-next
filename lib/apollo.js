import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.WORDPRESS_ENDPOINT_URL}`,
  cache: new InMemoryCache(),
});
