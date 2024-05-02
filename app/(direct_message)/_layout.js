import React from "react";
import { Stack } from "expo-router";

const DMListLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="DMList"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DMChat"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewMessage"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default DMListLayout;
