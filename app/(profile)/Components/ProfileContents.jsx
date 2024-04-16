import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { profileContents } from "../styles";

/**
 * Component for the top page of the Profile Page.
 * Functionality: Clicking pfp or edit button pops modal allowing you to edit your account information
 * @author: Ibrahim Mohammad
 * @returns Top of page containing pfp, name, stats(num posts/following), bio
 */
export const ProfileContents = ({ userData }) => {
  return (
    <View style={profileContents.ProfileContents}>
      <ProfileImage imageURL={userData.imageURL}></ProfileImage>
      <ProfileName
        displayName={userData.displayName}
        displayHandle={userData.displayHandle}
      ></ProfileName>

      <View style={profileContents.ProfileDetailContainer}>
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

const ProfileBio = ({ children }) => {
  return (
    <View style={profileContents.ProfileBioContainer}>
      <Text style={profileContents.BioText}>{children}</Text>
    </View>
  );
};

const ProfileStatsBar = ({ outlineCt, followerCt, followingCt }) => {
  return (
    <View style={profileContents.ProfileStatsContainer}>
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

const EditProfileBtn = () => {
  return (
    <Pressable style={profileContents.BtnEditProfile}>Edit Profile</Pressable>
  );
};

const ProfileStat = ({ children, label }) => (
  <Text style={profileContents.DisplayStats}>
    {children}
    <Text style={profileContents.StatTextStyle}> {label}</Text>
  </Text>
);

const ProfileName = ({ displayName, displayHandle }) => {
  return (
    <View style={profileContents.ProfileNameContainer}>
      <Text style={profileContents.DisplayName}>{displayName}</Text>
      <Text style={profileContents.DisplayHandle}>@{displayHandle}</Text>
    </View>
  );
};

export const ProfileImage = ({ imageURL }) => {
  return (
    <TouchableOpacity style={profileContents.IconContainer}>
      <Image source={imageURL} style={profileContents.ProfileIcon}></Image>
    </TouchableOpacity>
  );
};
