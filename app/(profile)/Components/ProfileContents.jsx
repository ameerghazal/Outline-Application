import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { profileTabNavs } from "../styles";
import { profileTabContents } from "../styles";
import OutlinePostEditable from "../../components/OutlinePostEditable";

/**
 * just a combined version of the 2 functions below. Previously was in 2 separate files, is now together so the tabbed functionality actually works.
 * @param {userData} param0, userData is passed in and accepted by ProfileTabContents, which uses the data to display the account name and information.
 * @returns Navigation Bar and Tabbed Component under it
 */
export const ProfileContents = ({
  userData,
  outlinePostsData,
  likedPostsData,
}) => {
  const [activeTab, setActiveTab] = useState("Outlines"); // Default active tab

  const handleSetActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View>
      <ProfileTabNavs activeTab={activeTab} handleSetActive={handleSetActive} />
      <ProfileTabContents
        activeTab={activeTab}
        userData={userData}
        outlinePostsData={outlinePostsData}
        likedPostsData={likedPostsData}
      />
    </View>
  );
};

/**
 * Navigation bar that moves between contents of the profile page.
 * Clicking between the tabs will change what content is displayed.
 * @author: Ibrahim Mohammad
 * @param {string} activeTab - The currently active tab.
 * @param {function} handleSetActive - Function to set the active tab.
 * @returns Navigation bar component for profile page tabs.
 */
export const ProfileTabNavs = ({ activeTab, handleSetActive }) => {
  return (
    <View style={profileTabNavs.profileTabNavs}>
      <ProfileTab
        tab="Outlines"
        isActive={activeTab === "Outlines"}
        onSetActive={() => handleSetActive("Outlines")}
      />
      <ProfileTab
        tab="Replies"
        isActive={activeTab === "Replies"}
        onSetActive={() => handleSetActive("Replies")}
      />
      <ProfileTab
        tab="Tagged"
        isActive={activeTab === "Tagged"}
        onSetActive={() => handleSetActive("Tagged")}
      />
      <ProfileTab
        tab="Likes"
        isActive={activeTab === "Likes"}
        onSetActive={() => handleSetActive("Likes")}
      />
    </View>
  );
};

const ProfileTab = ({ tab, isActive, onSetActive }) => {
  const tabStyle = isActive
    ? [profileTabNavs.TabTextContainer, profileTabNavs.active]
    : profileTabNavs.TabTextContainer;

  return (
    <Pressable onPress={onSetActive} style={tabStyle}>
      <Text style={profileTabNavs.TabText}>{tab}</Text>
    </Pressable>
  );
};

/**
 * //TODO: fix nirwaan's fraudlent component.
 * @returns Content displayed (ie. user outlines, replies, tagged, likes)
 */

/// THIS SHOULD WORK. ONLY ISSUE IS THAT FILTEREDPOSTS NEEDS TO HAVE SOME OBJECT.VALUES or BE CHANGED TO AN ARRAY OR SOMETHING LIKE THAT/
// ASK BROTHER GPT

export const ProfileTabContents = ({
  userData,
  activeTab,
  outlinePostsData,
  likedPostsData,
}) => {
  // Filter posts based on the active tab
  let filteredPosts = outlinePostsData;
  console.log("HERE IS FILTERED POSTS");
  console.log(filteredPosts);
  if (activeTab === "Outlines") {
    filteredPosts = outlinePostsData;
    console.log("HERE IS FILTERED POSTS");
    console.log(filteredPosts);
  }
  if (activeTab === "Likes") {
    filteredPosts = likedPostsData;
  }

  return (
    <View style={profileTabContents.container}>
      {filteredPosts.map((post) => (
        <OutlinePostEditable
          key={post.id}
          userData={userData}
          postData={post}
        ></OutlinePostEditable>
      ))}
    </View>
  );
};
