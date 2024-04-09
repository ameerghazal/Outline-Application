import React from "react";
import { Stack } from "expo-router";

const ExampleLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="NewPost"
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
