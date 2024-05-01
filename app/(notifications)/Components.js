// Components.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NotificationItem = ({ image, primaryText, secondaryText }) => {
  return (
    <View style={styles.notification}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.primaryText}>{primaryText}</Text>
        <Text style={styles.secondaryText}>{secondaryText}</Text>
      </View>
    </View>
  );
};

// Mock data for all notifications
const mockNotifications = [
  {
    image:
      "https://gravatar.com/avatar/9893f1ffceee8138df12b2447b805ed9?s=200&d=robohash&r=x",
    primaryText: "Your contact MoTren is now on Outline.",
    secondaryText: "Check his page out.",
  },
  {
    image: "https://placekitten.com/200/200",
    primaryText: "Simmons has accepted your follow request.",
    secondaryText: "",
  },
  {
    image: "https://placekitten.com/200/200",
    primaryText: "You have been mentioned in a post by MoTren.",
    secondaryText: "",
  },
  {
    image: "https://placekitten.com/200/200",
    primaryText: "Nerd-Waan, Cactus, and 130 others",
    secondaryText: "liked your outline.",
  },
  {
    image: "https://placekitten.com/200/200",
    primaryText: "Nerd-waan is now following you.",
    secondaryText: "",
  },
  {
    image: "https://placekitten.com/200/200",
    primaryText: "Nerd-Waan has requested to follow you.",
    secondaryText: "",
  },
  {
    image: "https://placekitten.com/200/200",
    primaryText: "Nerd-waan mentioned you in Cactus's Outline.",
    secondaryText: "",
  },
];

export const AllNotifications = () => {
  return (
    <View>
      {mockNotifications.map((notif, index) => (
        <NotificationItem
          key={index}
          image={notif.image}
          primaryText={notif.primaryText}
          secondaryText={notif.secondaryText}
        />
      ))}
    </View>
  );
};

// Mock data for mentions notifications
const mentionsNotificationsData = [
  {
    image: "https://placekitten.com/200/200",
    primaryText: "You have been mentioned in a post by MoTren.",
    secondaryText: "",
  },
  {
    image: "https://placekitten.com/200/200",
    primaryText: "You have been mentioned in a post by Nerd-Waan.",
    secondaryText: "",
  },
];

export const MentionsNotifications = () => {
  return (
    <View>
      {mentionsNotificationsData.map((notif, index) => (
        <NotificationItem
          key={index}
          image={notif.image}
          primaryText={notif.primaryText}
          secondaryText={notif.secondaryText}
        />
      ))}
    </View>
  );
};

// Mock data for follows notifications
const followsNotificationsData = [
  {
    image: "https://placekitten.com/200/200",
    primaryText: "Simmons has accepted your follow request.",
    secondaryText: "",
  },
  {
    image: "https://placekitten.com/200/200",
    primaryText: "Nerd-Waan is now following you.",
    secondaryText: "",
  },
  {
    image: "https://placekitten.com/200/200",
    primaryText: "Nerd-Waan has requested to follow you.",
    secondaryText: "",
  },
];

export const FollowsNotifications = () => {
  return (
    <View>
      {followsNotificationsData.map((notif, index) => (
        <NotificationItem
          key={index}
          image={notif.image}
          primaryText={notif.primaryText}
          secondaryText={notif.secondaryText}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",

    // Border bottom
    borderBottomWidth: 1,
    borderBottomColor: "#4B4B4B",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  primaryText: {
    color: "white",
    fontWeight: "regular",
    fontFamily: "MontserratMedium",
  },
  secondaryText: {
    color: "grey",
    fontFamily: "MontserratMedium",
  },
});
