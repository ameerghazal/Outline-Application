import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { profileInfo } from "../styles";
import { handleEditProfile } from "../Functions";
import { Link, router } from "expo-router";
import images from "../../../assets/images";

/**
 * Component for the top page of the Profile Page.
 * Functionality: Clicking pfp or edit button pops modal allowing you to edit your account information
 * @author: Ibrahim Mohammad
 * @returns Top of page containing pfp, name, stats(num posts/following), bio
 */

export const ProfileInfo = ({ userData, isCurrentUser }) => {
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
          isCurrentUser={isCurrentUser}
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
      <Image source={images.generic} style={profileInfo.profileIcon}></Image>
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

const ProfileStatsBar = ({ outlineCt, followerCt, followingCt, userData, isCurrentUser }) => {
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
      {isCurrentUser ? (<EditProfileBtn userData={userData}/>)
       : (<FollowProfileBtn userData={userData}/>)
      }
    </View>
  );
};

const ProfileStat = ({ children, label }) => (
  <Text style={profileInfo.displayStats}>
    {children}
    <Text style={profileInfo.statTextStyle}> {label}</Text>
  </Text>
);

const EditProfileBtn = ({ userData }) => {
  return (
    <Pressable
      style={profileInfo.btnEditProfile}
      onPress={() => {
        router.navigate({
          pathname: "/EditProfile",
          params: {
            displayName: userData.full_name,
            bio: userData.bio,
            displayHandle: userData.username,
          },
        });
      }}
    >
      <Text style={[profileInfo.btnEditProfileText]}>Edit Profile</Text>
    </Pressable>
  );
};

const FollowProfileBtn = ({userData}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  

  const handleFollow = () => {
    if (!isFollowing) {
      // Increment follower count only if not already following
      userData.follower_count++;
      setIsFollowing(true); // Update the following status
      console.log("Follower count after follow:", userData.follower_count);
    } else {
      // Prompt the user to confirm unfollowing
      alert(
        "Unfollow User",
        "Are you sure you want to unfollow this user?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Unfollow",
            onPress: () => {
              userData.follower_count--; // Decrement the follower count
              setIsFollowing(false); // Update the following status to false
              console.log(
                "Follower count after unfollow:",
                userData.follower_count
              );
            },
          },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Pressable onPress={handleFollow} style={profileInfo.btnEditProfile}>
      <Text style={profileInfo.btnEditProfileText}>
        {isFollowing ? "Following" : "Follow"}
      </Text>
    </Pressable>
  );
};

const ProfileBio = ({ children }) => {
  return (
    <View style={profileInfo.profileBioContainer}>
      <Text style={profileInfo.bioText}>{children}</Text>
    </View>
  );
}
