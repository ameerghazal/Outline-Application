import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Button } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import BottomNav from "../components/BottomNav";
import images from "../../assets/images";
import SettingsInputBox from "../components/SettingsInputBox";

const userInfo = {
  displayName: "phang (7.0 gpa)",
  displayHandle: "mollywhoppa",
  imageURL: images.ichigoIcon,
  bio: "one week she love me, one week she hate me, both weeks i got paid. Follow me on linkedin: linkedin.com/brahimt2",
};

/**
 * Highest Level of Component tree, calls backend for data and passes throughout the page
 * @author: Ali Nawaz
 * @returns Default Page to be displayed
 */

/**
 * // TODO figure out how to write to JSON - talk to nerdwaan
 */
const EditProfileScreen = () => {
  const [displayName, setDisplayName] = useState(userInfo.displayName);
  const [displayHandle, setDisplayHandle] = useState(userInfo.displayHandle);
  const [bio, setBio] = useState(userInfo.bio);

  return (
    <>
      <ScrollView style={frames.outerFrame}>
        {/* <Button title="Random User" onPress={handleRandomUser} /> */}
        <BackBar></BackBar>
        <SettingsInputBox
          placeholder={"Display Name"}
          onChangeText={setDisplayName}
        >
          {displayName}
        </SettingsInputBox>
        <SettingsInputBox
          placeholder={"Display Handle"}
          onChangeText={setDisplayHandle}
        >
          {displayHandle}
        </SettingsInputBox>
        <SettingsInputBox placeholder={"Bio"} onChangeText={setBio}>
          {bio}
        </SettingsInputBox>
      </ScrollView>
      <BottomNav></BottomNav>
    </>
  );
};

const frames = StyleSheet.create({
  outerFrame: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    paddingHorizontal: 10,
  },
});

export default EditProfileScreen;
