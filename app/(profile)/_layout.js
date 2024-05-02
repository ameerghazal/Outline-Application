import React from "react";
import { Stack, router } from "expo-router";
import { Button } from "react-native-web";
import { Feather } from "@expo/vector-icons";

const Profile = () => {
  return (
    <Stack>
      <Stack.Screen name="Profile" options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="EditProfile"
        options={{ ...header, title: "Edit Profile" }}
      />
    </Stack>
  );
};

// CSS FOR HEADER
const header = {
  headerShown: true,
  headerTitleAlign: "center", // Centers the header title
  headerStyle: {
    backgroundColor: "#1B1B1B", // Sets the background color of the header
    shadowOpacity: 0, // Removes shadow for iOS
    elevation: 0, // Removes elevation (shadow) for Android
    borderBottomWidth: 0, // Removes the bottom border line
  },
  headerTintColor: "#fff", // Sets the color of the back button and title
};

export default Profile;
