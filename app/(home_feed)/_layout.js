import React from "react";
import { Stack } from "expo-router";

const ExampleLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="HomeFeed"
        options={{
          headerShown: false,
          // headerStyle: {},
        }}
      />
      <Stack.Screen
        name="(outlines)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ExampleLayout;
