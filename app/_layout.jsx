import React from "react";
import { Stack } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import client from "../fetching/apolloClient";
import { WeekDataProvider } from "../contexts/WeekDataContext";

const RootLayout = () => {
  //need öö the logic here yes
  const username = "valtteri";
  const week = 1;
  return (
    <ApolloProvider client={client}>
      <WeekDataProvider username={username} week={week}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: true }} />
          <Stack.Screen name='(auth)' options={{ headerShown: true }} />
          <Stack.Screen name='index' options={{ headerShown: true }} />
        </Stack>
      </WeekDataProvider>
    </ApolloProvider>
  );
};

export default RootLayout;
