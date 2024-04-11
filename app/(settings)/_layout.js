import React from "react";
import { Stack } from "expo-router";

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Settings"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      />
    </Stack>
  );
};

export default SettingsLayout;
