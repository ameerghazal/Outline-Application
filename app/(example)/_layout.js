import React from "react";
import { Stack } from "expo-router";

const ExampleLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Example"
        options={
          {
            // headerShown: true,
            // headerStyle: {},
          }
        }
      />
    </Stack>
  );
};

export default ExampleLayout;
