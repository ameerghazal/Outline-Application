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
  return (
    <Text style={frames.ProfileText}>
      Bro it keeps pushing on my uflip account idk why bruh
    </Text>
  );
};

export const ProfileTabContent = () => {
  return <Text style={frames.ProfileText}>Gah Dam IT Im Cheesed</Text>;
};

const frames = StyleSheet.create({
  ProfileText: {
    color: "white",
  },
});

export default ProfileText;
