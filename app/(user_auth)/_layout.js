import React from "react";
import { Stack } from "expo-router";

const UserAuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="SignIn"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: false,
          // headerStyle: {},
        }}
      />
      <Stack.Screen
        name="SignUpExt"
        options={{
          headerShown: false,
          // headerStyle: {},
        }}
      />
      <Stack.Screen
        name="ResetPass"
        options={{
          headerShown: false,
          // headerStyle: {},
        }}
      />
    </Stack>
  );
};

export default UserAuthLayout;
