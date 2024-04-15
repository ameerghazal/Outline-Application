import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      {/* Example Examlpe Page */}
      <Stack.Screen
        name="(example)"
        options={{
          headerShown: false,
        }}
      />
      {/* Ibrahim Profile Page */}
      <Stack.Screen
        name="(profile)"
        options={{
          headerShown: false,
        }}
      />
      {/* Ameer G SignIn SignUp page */}
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
