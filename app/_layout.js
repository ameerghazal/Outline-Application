import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      {/* Example Examlpe Page */}
      <Stack.Screen
        name="(example)"
        options={{
          headerShown: false,
        }}
      />
      {/* Search Page */}
      <Stack.Screen
        name="(search)"
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
      {/* Ahmed DMs page */}
      <Stack.Screen
        name="(direct_message)"
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
      <Stack.Screen
        name="(settings)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(notifications)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
