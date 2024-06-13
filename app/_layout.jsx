import React from "react";
import { Stack } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import client from "../fetching/apolloClient";

const RootLayout = () => {
  return (
      <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: true }} />
        <Stack.Screen name='(auth)' options={{ headerShown: true }} />
        <Stack.Screen name='index' options={{ headerShown: true }} />
      </Stack>
    </ApolloProvider>  
    
  );
};

export default RootLayout;
