import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { profileContents } from "../styles";
import { handleEditProfile } from "../Functions";
import { router } from "expo-router";

/**
 * Component for the top page of the Profile Page.
 * Functionality: Clicking pfp or edit button pops modal allowing you to edit your account information
 * @author: Ibrahim Mohammad
 * @returns Top of page containing pfp, name, stats(num posts/following), bio
 */
export const ProfileContents = ({ userData }) => {
  return (
    <View style={profileContents.profileContents}>
      {/* Username and image */}
      <View style={profileContents.profileMainContainer}>
        <ProfileImage imageURL={userData.imageURL}></ProfileImage>
        <ProfileName
          displayName={userData.displayName}
          displayHandle={userData.displayHandle}
        ></ProfileName>
      </View>

      {/* Following and Edit Btn */}
      <View style={profileContents.profileDetailContainer}>
        <ProfileStatsBar
          outlineCt={userData.outlineCt}
          followerCt={userData.followerCt}
          followingCt={userData.followingCt}
        ></ProfileStatsBar>
        <ProfileBio>{userData.bio}</ProfileBio>
      </View>
    </View>
  );
};

export const ProfileImage = ({ imageURL }) => {
  return (
    <TouchableOpacity style={profileContents.iconContainer}>
      <Image
        source={require("../../../assets/ichigo-icon.png")}
        style={profileContents.profileIcon}
      ></Image>
      {/* <Image source={imageURL} style={profileContents.ProfileIcon}></Image> */}
    </TouchableOpacity>
  );
};

const ProfileName = ({ displayName, displayHandle }) => {
  return (
    <View style={profileContents.profileNameContainer}>
      <Text style={profileContents.displayName}>{displayName}</Text>
      <Text style={profileContents.displayHandle}>@{displayHandle}</Text>
    </View>
  );
};

const ProfileStatsBar = ({ outlineCt, followerCt, followingCt }) => {
  return (
    <View style={profileContents.profileStatsContainer}>
      <ProfileStat label="outlines">
        <Text>{`${outlineCt}k`}</Text>
      </ProfileStat>
      <ProfileStat label="followers">
        <Text>{`${followerCt}k`}</Text>
      </ProfileStat>
      <ProfileStat label="following">
        <Text>{`${followingCt}k`}</Text>
      </ProfileStat>
      <EditProfileBtn></EditProfileBtn>
    </View>
  );
};

const ProfileStat = ({ children, label }) => (
  <Text style={profileContents.displayStats}>
    {children}
    <Text style={profileContents.statTextStyle}> {label}</Text>
  </Text>
);

const EditProfileBtn = () => {
  return (
    <Pressable
      style={profileContents.btnEditProfile}
      onPress={() => {
        router.push("./EditProfile");
      }}
    >
      <Text style={[profileContents.btnEditProfileText]}>Edit Profile</Text>
    </Pressable>
  );
};

const ProfileBio = ({ children }) => {
  return (
    <View style={profileContents.profileBioContainer}>
      <Text style={profileContents.bioText}>{children}</Text>
    </View>
  );
};
