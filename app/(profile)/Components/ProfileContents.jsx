import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { profileTabNavs } from "../styles";
import { profileTabContents } from "../styles";
import IbrahimOutlinePost from "./IbrahimOutlinePost";
import { StyleSheet } from "react-native";
import OutlinePostEditable from "../../components/OutlinePostEditable";

const list = [
  ["Item 1", "poop", "pOOP"],
  ["wake up", "create post time", "delete android folder"],
  [
    "delete ios folder",
    "create a better method for getting outline content",
    "too much text",
  ],
];

/**
 * just a combined version of the 2 functions below. Previously was in 2 separate files, is now together so the tabbed functionality actually works.
 * @param {userData} param0, userData is passed in and accepted by ProfileTabContents, which uses the data to display the account name and information.
 * @returns Navigation Bar and Tabbed Component under it
 */
export const ProfileContents = ({ userData, postsData }) => {
  return (
    <View>
      <ProfileTabNavs />
      <ProfileTabContents userData={userData} postsData={postsData} />
    </View>
  );
};

/**
 * This is the middle part of the page, containing the navigation between content.
 * Functionality: Clicking between the tabs will change what content is displayed.
 * @author: Ibrahim Mohammad
 * @returns Navigation bar that moves between contents of the profile page
 */
export const ProfileTabNavs = () => {
  const [activeTab, setActiveTab] = useState("Outlines"); // Default active tab

  return (
    <View style={profileTabNavs.profileTabNavs}>
      <ProfileTab
        tab={"Outlines"}
        isActive={activeTab === "Outlines"}
        handleSetActive={() => setActiveTab("Outlines")}
      />
      <ProfileTab
        tab={"Replies"}
        isActive={activeTab === "Replies"}
        handleSetActive={() => setActiveTab("Replies")}
      />
      <ProfileTab
        tab={"Tagged"}
        isActive={activeTab === "Tagged"}
        handleSetActive={() => setActiveTab("Tagged")}
      />
      <ProfileTab
        tab={"Likes"}
        isActive={activeTab === "Likes"}
        handleSetActive={() => setActiveTab("Likes")}
      />
    </View>
  );
};

const ProfileTab = ({ tab, isActive, handleSetActive }) => {
  const tabStyle = isActive
    ? [profileTabNavs.TabTextContainer, profileTabNavs.active]
    : profileTabNavs.TabTextContainer;

  return (
    <Pressable onPress={handleSetActive} style={tabStyle}>
      <Text style={profileTabNavs.TabText}>{tab}</Text>
    </Pressable>
  );
};

/**
 * MockData needs:
 * Current Time + Time of Post
 * list containing outline bullets
 */

/**
 * //TODO: fix nirwaan's fraudlent component.
 * @returns Content displayed (ie. user outlines, replies, tagged, likes)
 */
export const ProfileTabContents = ({ userData, postsData }) => {
  return (
    <View style={profileTabContents.container}>
      {Object.values(postsData).map((post) => (
        <OutlinePostEditable
          key={post.id}
          userData={userData}
          postData={post}
        ></OutlinePostEditable>
      ))}
    </View>
  );
};
