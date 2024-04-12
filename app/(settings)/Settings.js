import React from "react";
import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { router } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
  },
  text: {
    color: "#FFFAFA",
    marginLeft: 15,
  },
  section: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#4B4B4B",
    borderRadius: 10,
  },
  sectionTitle: {
    color: "#FFFAFA",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sectionItem: {
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
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
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  ));

function Settings({ router }) {
  // Array of items for each section with their corresponding routes
  const contactDetails = [
    { name: "Profile Settings", route: "./ProfileSettingsPage" },
  ];
  const securitySettings = [
    { name: "Password Reset", route: "./PasswordResetPage" },
    { name: "Face ID and PIN", route: "./FaceIdAndPinPage" },
  ];
  const appSettings = [
    { name: "Notifications", route: "./NotificationsPage" },
    { name: "Appearance", route: "./AppearancePage" },
    { name: "Preferences", route: "./PreferencesPage" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Contact Details Section */}
      <Text style={styles.sectionTitle}>Contact Details</Text>
      <View style={styles.section}>{renderItems(contactDetails)}</View>

      {/* Security Settings Section */}
      <Text style={styles.sectionTitle}>Security Settings</Text>
      <View style={styles.section}>{renderItems(securitySettings)}</View>

      {/* App Settings Section */}
      <Text style={styles.sectionTitle}>App Settings</Text>
      <View style={styles.section}>{renderItems(appSettings)}</View>
    </ScrollView>
  );
}

export default Settings;
