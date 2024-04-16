import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { frames } from "../styles";

export const ProfileContents = ({ userData }) => {
  return (
    <View style={frames.ProfileContents}>
      <ProfileImage imageURL={userData.imageURL}></ProfileImage>
      <ProfileName
        displayName={userData.displayName}
        displayHandle={userData.displayHandle}
      ></ProfileName>

      <View style={frames.ProfileDetailContainer}>
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
    <View style={frames.ProfileBioContainer}>
      <Text style={frames.BioText}>{children}</Text>
    </View>
  );
};

const ProfileStatsBar = ({ outlineCt, followerCt, followingCt }) => {
  return (
    <View style={frames.ProfileStatsContainer}>
      <Text style={frames.DisplayStats}>{outlineCt}k outlines</Text>
      <Text style={frames.DisplayStats}>{followerCt} followers</Text>
      <Text style={frames.DisplayStats}>{followingCt} following</Text>
      <Pressable style={frames.BtnEditProfile}>Edit Profile</Pressable>
    </View>
  );
};

const ProfileName = ({ displayName, displayHandle }) => {
  return (
    <View style={frames.ProfileNameContainer}>
      <Text style={frames.DisplayName}>{displayName}</Text>
      <Text style={frames.DisplayHandle}>@{displayHandle}</Text>
    </View>
  );
};

export const ProfileImage = ({ imageURL }) => {
  return (
    <TouchableOpacity style={frames.IconContainer}>
      <Image source={imageURL} style={frames.ProfileIcon}></Image>
    </TouchableOpacity>
  );
};
