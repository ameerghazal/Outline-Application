import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { ProfileTabNavs } from "./Components/ProfileTabNavs";
import { ProfileContents } from "./Components/ProfileContents";
import { ProfileTabContents } from "./Components/ProfileTabContents";
import { BackBar } from "../(user_auth)/Components";
import BottomNav from "../components/BottomNav";

/**
 * Highest Level of Component tree, calls backend for data and passes throughout the page
 * @author: Ibrahim Mohammad
 * @returns Default Page to be displayed
 */
const EditProfileScreen = () => {
  return (
    <View style={frames.outerFrame}>
      {/* <Button title="Random User" onPress={handleRandomUser} /> */}
      <BackBar></BackBar>
      <BottomNav></BottomNav>
    </View>
  );
};

const frames = StyleSheet.create({
  outerFrame: {
    backgroundColor: "#1B1B1B",
    flex: 1,
  },
});

// Export the sign-up-screen to other pages.
export default EditProfileScreen;
