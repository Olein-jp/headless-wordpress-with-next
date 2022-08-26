import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://demo.olein-design.com/headless/graphql",
  cache: new InMemoryCache(),
});
