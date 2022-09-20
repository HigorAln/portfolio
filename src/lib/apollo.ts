import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8a4blng30bu01taakqfbpdt/master",
  // headers: {
  //   Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  // },
  cache: new InMemoryCache(),
});
