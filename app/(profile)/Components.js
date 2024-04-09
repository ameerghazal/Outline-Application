import React, { PureComponent } from "react";
import { Text, StyleSheet } from "react-native";

// Components of the function, can be stored inside or outside the file
const ProfileText = () => {
  return <Text style={frames.ProfileText}>This is the profile page</Text>;
};

export const ProfileContents = () => {
  return <Text style={frames.ProfileText}>This is the profile contents</Text>;
};

export const ProfileTabNavs = () => {
  return <Text style={frames.ProfileText}>This is the profile tabnavs</Text>;
};

export const ProfileTabContent = () => {
  return <Text style={frames.ProfileText}>This is the profile tabcontent</Text>;
};

const frames = StyleSheet.create({
  ProfileText: {
    color: "white",
  },
});

export default ProfileText;
