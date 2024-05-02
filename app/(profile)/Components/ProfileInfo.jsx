import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { profileInfo } from "../styles";
import { handleEditProfile } from "../Functions";
import { router } from "expo-router";

/**
 * Component for the top page of the Profile Page.
 * Functionality: Clicking pfp or edit button pops modal allowing you to edit your account information
 * @author: Ibrahim Mohammad
 * @returns Top of page containing pfp, name, stats(num posts/following), bio
 */
export const ProfileInfo = ({ userData }) => {
  return (
    <View style={profileInfo.profileInfo}>
      {/* Username and image */}
      <View style={profileInfo.profileMainContainer}>
        <ProfileImage imageURL={userData.picture}></ProfileImage>
        <ProfileName
          displayName={userData.full_name}
          displayHandle={userData.username}
        ></ProfileName>
      </View>

      {/* Following and Edit Btn */}
      <View style={profileInfo.profileDetailContainer}>
        <ProfileStatsBar
          outlineCt={userData.outline_count}
          followerCt={userData.follower_count}
          followingCt={userData.following_count}
        ></ProfileStatsBar>
        <ProfileBio>{userData.bio}</ProfileBio>
      </View>
    </View>
  );
};

export const ProfileImage = ({ imageURL }) => {
  const trumpImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycocXLesgDXLZ5Oz1dKriafnxv8TMqHDQHGyKNuyV7A&s";

  return (
    <TouchableOpacity style={profileInfo.iconContainer}>
      <Image source={imageURL} style={profileInfo.profileIcon}></Image>
    </TouchableOpacity>
  );
};

const ProfileName = ({ displayName, displayHandle }) => {
  return (
    <View style={profileInfo.profileNameContainer}>
      <Text style={profileInfo.displayName}>{displayName}</Text>
      <Text style={profileInfo.displayHandle}>@{displayHandle}</Text>
    </View>
  );
};

const ProfileStatsBar = ({ outlineCt, followerCt, followingCt }) => {
  return (
    <View style={profileInfo.profileStatsContainer}>
      <ProfileStat label="outlines">
        <Text>{outlineCt}</Text>
      </ProfileStat>
      <ProfileStat label="followers">
        <Text>{followerCt}</Text>
      </ProfileStat>
      <ProfileStat label="following">
        <Text>{followingCt}</Text>
      </ProfileStat>
      <EditProfileBtn></EditProfileBtn>
    </View>
  );
};

const ProfileStat = ({ children, label }) => (
  <Text style={profileInfo.displayStats}>
    {children}
    <Text style={profileInfo.statTextStyle}> {label}</Text>
  </Text>
);

const EditProfileBtn = () => {
  return (
    <Pressable
      style={profileInfo.btnEditProfile}
      onPress={() => {
        router.push("./EditProfile");
      }}
    >
      <Text style={[profileInfo.btnEditProfileText]}>Edit Profile</Text>
    </Pressable>
  );
};

const ProfileBio = ({ children }) => {
  return (
    <View style={profileInfo.profileBioContainer}>
      <Text style={profileInfo.bioText}>{children}</Text>
    </View>
  );
};
