import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { profileTabNavs } from "../styles";

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
