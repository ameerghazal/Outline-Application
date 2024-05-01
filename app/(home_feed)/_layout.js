import React from "react";
import { Stack } from "expo-router";

const ExampleLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="HomeFeed"
        options={{
          // hella featuers, hit up ameerG
          headerShown: false,
          // headerStyle: {},
        }}
      />
    </Stack>
  );
};

export default ExampleLayout;
