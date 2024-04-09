import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ProfileText from "./Components";
import {
  ProfileContents,
  ProfileTabNavs,
  ProfileTabContent,
} from "./Components";

// Main function
const Screen = () => {
  return (
    <View style={frames.outer_frame}>
      <ProfileText></ProfileText>
      <ProfileContents></ProfileContents>
      <ProfileTabNavs></ProfileTabNavs>
      <ProfileTabContent></ProfileTabContent>
    </View>
  );
};

const frames = StyleSheet.create({
  outer_frame: {
    backgroundColor: "#1B1B1B",
    flex: 1,
  },
});

// Export the sign-up-screen to other pages.
export default Screen;
