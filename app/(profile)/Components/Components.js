import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { frames } from "../styles";

// Components of the function, can be stored inside or outside the file
const display = "phang (7.0 gpa)";
const handle = "mollywhoppa";
const numOutlines = 30;
const numFollowers = 350;
const numFollowing = 130;

export const ProfileContents = ({
  displayName = display,
  displayHandle = handle,
  outlineCt = numOutlines,
  followerCt = numFollowers,
  followingCt = numFollowing,
}) => {
  return (
    <View style={frames.ProfileContents}>
      <ProfileImage></ProfileImage>
      <View style={frames.ProfileNameContainer}>
        <Text style={frames.DisplayName}>{displayName}</Text>
        <Text style={frames.DisplayHandle}>@{displayHandle}</Text>
      </View>
      <View style={frames.ProfileBioContainer}>
        <View style={frames.ProfileStatsContainer}>
          <Text style={frames.DisplayStats}>{outlineCt}k outlines</Text>
          <Text style={frames.DisplayStats}>{followerCt} followers</Text>
          <Text style={frames.DisplayStats}>{followingCt} following</Text>
        </View>
        <Pressable style={frames.BtnEditProfile}>Edit Profile</Pressable>
      </View>
    </View>
  );
};

export const ProfileImage = () => {
  return (
    <TouchableOpacity style={frames.IconContainer}>
      <Image
        source={require("../../../assets/ichigo-icon.png")}
        // source={{ uri: "" }}
        style={frames.ProfileIcon}
      ></Image>
    </TouchableOpacity>
  );
};

export const ProfileTabNavs = () => {
  return <Text style={frames.ProfileText}>TAB COMPONENTS </Text>;
};

export const ProfileTabContent = () => {
  return <Text style={frames.ProfileText}>TAB CONTENTS</Text>;
};
