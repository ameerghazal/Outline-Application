import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Button } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import BottomNav from "../components/BottomNav";
import images from "../../assets/images";
import SettingsInputBox from "../components/SettingsInputBox";
import { useLocalSearchParams, useGlobalSearchParams } from "expo-router";

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
  const params = useLocalSearchParams();
  console.log(params);
  const { bio, displayHandle, displayName } = params;

  const [displayNameState, setDisplayName] = useState(displayName);
  const [displayHandleState, setDisplayHandle] = useState(displayHandle);
  const [bioState, setBio] = useState(bio);

  return (
    <>
      <ScrollView style={frames.outerFrame}>
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
    paddingTop: 20,
  },
});

export default EditProfileScreen;
