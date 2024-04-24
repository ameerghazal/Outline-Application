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
    <View style={profileTabNavs.ProfileTabNavs}>
      <ProfileTab
        tab={"Outlines"}
        isActive={activeTab === "Outlines"}
        onPress={() => setActiveTab("Outlines")}
      />
      <ProfileTab
        tab={"Replies"}
        isActive={activeTab === "Replies"}
        onPress={() => setActiveTab("Replies")}
      />
      <ProfileTab
        tab={"Tagged"}
        isActive={activeTab === "Tagged"}
        onPress={() => setActiveTab("Tagged")}
      />
      <ProfileTab
        tab={"Likes"}
        isActive={activeTab === "Likes"}
        onPress={() => setActiveTab("Likes")}
      />
    </View>
  );
};

const ProfileTab = ({ tab, isActive, onPress }) => {
  const tabStyle = isActive
    ? [profileTabNavs.TabTextContainer, profileTabNavs.active]
    : profileTabNavs.TabTextContainer;

  return (
    <Pressable onPress={onPress} style={tabStyle}>
      <Text style={profileTabNavs.TabText}>{tab}</Text>
    </Pressable>
  );
};
