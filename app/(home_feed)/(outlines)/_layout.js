import React from "react";
import { Stack } from "expo-router";

const OutlineLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default OutlineLayout;
