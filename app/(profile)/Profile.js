import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { ProfileTabNavs, ProfileTabContent } from "./Components/Components";

import { ProfileContents } from "./Components/ProfileContents";

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

// Main function
const Screen = () => {
  const [userData, setUserData] = useState(mockUserData[0]); // Initialize with the first user

  useEffect(() => {
    // Here you could fetch initial data if needed
  }, []);

  const handleRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * mockUserData.length);
    setUserData(mockUserData[randomIndex]);
  };

  return (
    <View style={frames.outerFrame}>
      <Button title="Random User" onPress={handleRandomUser} />
      <ProfileContents userData={userData} />
      <ProfileTabNavs />
      <ProfileTabContent />
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
export default Screen;
