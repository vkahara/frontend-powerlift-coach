import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    //phone cannot use computers localhost so i added my computer local adcdress.
    //this will not be needed to change once we host our backend somewhere
    uri: "http://192.168.1.102:4000"
  }),
  cache: new InMemoryCache()
});

export default client;
