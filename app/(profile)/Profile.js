import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { ProfileTabNavs } from "./Components/ProfileTabNavs";
import { ProfileContents } from "./Components/ProfileContents";
import { ProfileTabContents } from "./Components/ProfileTabContents";
import { BackBar } from "../(user_auth)/Components";
import BottomNav from "../components/BottomNav";

const mockUserData = [
  {
    displayName: "phang (7.0 gpa)",
    displayHandle: "mollywhoppa",
    outlineCt: 42,
    followerCt: 987,
    followingCt: 150,
    imageURL: "../../../assets/ichigo-icon.png",
    bio: "one week she love me, one week she hate me, both weeks i got paid. Follow me on linkedin: linkedin.com/brahimt2",
  },
  {
    displayName: "Moaz Asim",
    displayHandle: "brown_boy_999",
    outlineCt: 25,
    followerCt: 456,
    followingCt: 212,
    imageURL: "../../../assets/chad-icon.png",
    bio: "Guys help im trapped in outline ",
  },
  {
    displayName: "Hassaan Basit",
    displayHandle: "cactus5pf",
    outlineCt: 75,
    followerCt: 12000,
    followingCt: 3,
    imageURL: "../../../assets/renji-icon.png",
    bio: "michigan squirrels got to me. amos: hassanbasit",
  },
];

/**
 * Highest Level of Component tree, calls backend for data and passes throughout the page
 * @author: Ibrahim Mohammad
 * @returns Default Page to be displayed
 */
const ProfileScreen = () => {
  const [userData, setUserData] = useState(mockUserData[0]); // Initialize with the first user

  // Random Number for the page swap
  const handleRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * mockUserData.length);
    setUserData(mockUserData[randomIndex]);
  };

  return (
    <View style={frames.outerFrame}>
      {/* <Button title="Random User" onPress={handleRandomUser} /> */}
      <BackBar></BackBar>
      <ProfileContents userData={userData} />
      <ProfileTabNavs />
      <ProfileTabContents />
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
export default ProfileScreen;
