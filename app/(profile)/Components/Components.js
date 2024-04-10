import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// Components of the function, can be stored inside or outside the file
export const ProfileText = () => {
  return <Text style={frames.ProfileText}>This is the profile page</Text>;
};

export const ProfileContents = () => {
  return (
    <View style={frames.ProfileContents}>
      <TouchableOpacity style={frames.IconContainer}>
        <Image
          source={require(".././assets/ichigo-icon.png")}
          style={frames.ProfileIcon}
        ></Image>
      </TouchableOpacity>
    </View>
  );
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
  ProfileContents: {
    backgroundColor: "",
  },
  IconContainer: {
    background: "none",
    maxWidth: 100,
    alignSelf: "center",
  },
  ProfileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
