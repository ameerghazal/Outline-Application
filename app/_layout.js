import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="(example)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(user_auth)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(settings)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
