import { ApolloClient,
    InMemoryCache,
    ApolloLink,
    HttpLink,
    ApolloProvider,
    HttpLink
 } from "@apollo/client";

 const HttpLink = new HttpLink({uri: 'http://localhost:4000/'})

 