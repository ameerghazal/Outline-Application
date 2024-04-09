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
        name="(home_feed)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(new_post)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
