import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

const link = new WebSocketLink({
  uri: `ws://localhost:8085/query`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient
  ({
    link,
    uri: "http://localhost:8085/query",
    cache: new InMemoryCache(),
  });
  
export default client;
