import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { BackBar } from "../(user_auth)/Components";
import {
  AllNotifications,
  MentionsNotifications,
  FollowsNotifications,
} from "./Components";

const NotificationsPage = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const renderContent = () => {
    // Logic to render notifications based on selected tab
    switch (selectedTab) {
      case "Mentions":
        return <MentionsNotifications />;
      case "Follows":
        return <FollowsNotifications />;
      default:
        return <AllNotifications />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Navigation Header */}
      <View style={styles.header}>
        <BackBar></BackBar>
        <Text style={[styles.title, styles.whiteText]}>Notifications</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="cog"
            style={[styles.icon, styles.whiteText]}
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "All" && styles.selectedTab]}
          onPress={() => setSelectedTab("All")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "All" && styles.selectedTabText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Mentions" && styles.selectedTab]}
          onPress={() => setSelectedTab("Mentions")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Mentions" && styles.selectedTabText,
            ]}
          >
            Mentions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Follows" && styles.selectedTab]}
          onPress={() => setSelectedTab("Follows")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Follows" && styles.selectedTabText,
            ]}
          >
            Follows
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {renderContent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "Montserrat", // Assuming you've loaded the Monsterrat font
  },
  icon: {
    fontSize: 24,
  },
  whiteText: {
    color: "#ffffff",
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  tabText: {
    color: "#ffffff",
    fontSize: 16,
  },
  selectedTab: {
    color: "#8dac83",
  },
  selectedTabText: {
    color: "#8dac83",
    fontWeight: "bold",

    display: "flex",
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
  },

  notification: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: "#333",
  },

  notification_list: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: "#333",
  },
});

export default NotificationsPage;
