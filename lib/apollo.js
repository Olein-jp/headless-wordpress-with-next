import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.WORDPRESS_ENDPOINT_URL}`,
  cache: new InMemoryCache(),
});
