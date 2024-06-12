import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import client from "../fetching/apolloClient";

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
      </Stack>
    </ApolloProvider>
  );
};

export default RootLayout;
