import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
  },
  text: {
    color: "#FFFAFA",
  },
  section: {
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#4B4B4B",
    borderRadius: 10,
  },
  sectionTitle: {
    color: "#FFFAFA",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sectionItem: {
    color: "#FFFAFA",
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#353B42",
  },
});

function Settings() {
  return (
    <ScrollView style={styles.container}>
      {/* Contact Details Section */}
      <Text style={styles.sectionTitle}>Contact Details</Text>
      <View style={styles.section}>
        <View style={styles.sectionItem}>
          <Text>Email address</Text>
        </View>
        <Text style={styles.sectionItem}>Residential address/campus</Text>
      </View>

      {/* Security Settings Section */}
      <Text style={styles.sectionTitle}>Security Settings</Text>
      <View style={styles.section}>
        <Text style={styles.sectionItem}>Pasword Reset</Text>
        <Text style={styles.sectionItem}>Face ID and PIN</Text>
      </View>

      {/* App Settings Section */}
      <Text style={styles.sectionTitle}>App Settings</Text>
      <View style={styles.section}>
        <Text style={styles.sectionItem}>Notifications</Text>
        <Text style={styles.sectionItem}>Appearance</Text>
        <Text style={styles.sectionItem}>Preferences</Text>
      </View>
    </ScrollView>
  );
}

export default Settings;
