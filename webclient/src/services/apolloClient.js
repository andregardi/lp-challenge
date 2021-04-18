import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { GRAPHQL_SERVER_URL } from "../constans";

const apolloClient = new ApolloClient({
  uri: GRAPHQL_SERVER_URL,
  cache: new InMemoryCache()
});

apolloClient.useQuery = function useMapQuery(query, options) {
  this.client = apolloClient;
  const { loading, error, data } = useQuery(query, {
    ...options,
    client: apolloClient
  });

  if (options.mapData && !loading && !error)
    return { loading, error, data: options.mapData(data) };

  return { loading, error, data };
};

export default apolloClient;
