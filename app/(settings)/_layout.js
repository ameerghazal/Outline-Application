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
      <Stack.Screen
        name="ProfileSettingsPage"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PasswordResetPage" options={{ headerShown: false }} />
      <Stack.Screen name="FaceIdAndPinPage" options={{ headerShown: false }} />
      <Stack.Screen name="NotificationsPage" options={{ headerShown: false }} />
      <Stack.Screen name="AppearancePage" options={{ headerShown: false }} />
      <Stack.Screen name="PreferencesPage" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SettingsLayout;
