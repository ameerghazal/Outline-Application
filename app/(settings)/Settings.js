import React from "react";
import globalStyles from "./globalStyles";
import BottomNav from "../components/BottomNav";

import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { router } from "expo-router";
import { BackBar } from "../(user_auth)/Components";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  marginLeft: {
    marginLeft: 15,
  },
  marginLeftSmaller: {
    marginLeft: 10,
  },
  section: {
    marginBottom: 10,
    backgroundColor: "#4B4B4B",
    borderRadius: 10,
  },
  sectionTitle: {
    color: "#FFFAFA",
    marginBottom: 10,
  },
  sectionItem: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  marginBottom: {
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#353B42",
  },
});

const renderItems = (items) =>
  items.map((item, index) => (
    <Pressable
      key={item.name}
      onPress={() => router.push(item.route)}
      style={[
        styles.sectionItem,
        index !== items.length - 1 && styles.marginBottom, // Apply marginBottom style conditionally
      ]}
    >
      <Feather
        style={styles.marginLeft}
        name={item.icon}
        size={24}
        color="#FFFAFA"
      />

      <Text style={[globalStyles.text, styles.marginLeftSmaller]}>
        {item.name}
      </Text>
    </Pressable>
  ));

function Settings() {
  // Array of items for each section with their corresponding routes
  const contactDetails = [
    { name: "Profile Settings", route: "./ProfileSettingsPage", icon: "user" },
  ];
  const securitySettings = [
    { name: "Password Reset", route: "./ResetConformation", icon: "lock" },
    { name: "Face ID and PIN", route: "./FaceIdAndPinPage", icon: "eye" },
  ];
  const appSettings = [
    { name: "Notifications", route: "./NotificationsPage", icon: "bell" },
    { name: "Appearance", route: "./AppearancePage", icon: "image" },
    { name: "Preferences", route: "./PreferencesPage", icon: "code" },
  ];

  return (
    <>
      <ScrollView style={globalStyles.container}>
        <BackBar></BackBar>
        {/* Contact Details Section */}
        <Text style={[styles.sectionTitle, globalStyles.text]}>
          Contact Details
        </Text>
        <View style={styles.section}>{renderItems(contactDetails)}</View>

        {/* Security Settings Section */}
        <Text style={[styles.sectionTitle, globalStyles.text]}>
          Security Settings
        </Text>
        <View style={styles.section}>{renderItems(securitySettings)}</View>

        {/* App Settings Section */}
        <Text style={[styles.sectionTitle, globalStyles.text]}>
          App Settings
        </Text>
        <View style={styles.section}>{renderItems(appSettings)}</View>
      </ScrollView>
      <BottomNav />
    </>
  );
}

export default Settings;
