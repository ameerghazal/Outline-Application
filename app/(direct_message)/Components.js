import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import { openChat } from "./Functions";
import { router } from "expo-router";

const navigateToUserProfile = () => {
  router.push("Profile");
};

const onNewMessagePress = () => {
  router.push("NewMessage");
};

export const DMHeader = ({ onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false); // State to track focus

  const searchBarStyle = {
    ...headerStyles.searchBar,
    textAlign: isFocused ? "left" : "center", // Align text based on focus
    color: isFocused ? "#606060" : "#606060", // Change text color based on focus
    borderColor: isFocused ? "#606060" : "#606060", // Optionally change border color
  };

  return (
    <View style={headerStyles.mainContainer}>
      <View style={headerStyles.container}>
        <TouchableOpacity onPress={navigateToUserProfile}>
          <Image
            style={headerStyles.avatar}
            source={require("../../assets/zekePfp.png")}
          />
        </TouchableOpacity>
        <Text style={headerStyles.text}>Messages</Text>
        <TouchableOpacity onPress={onNewMessagePress}>
          <FontAwesome6 name="pen-to-square" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={headerStyles.searchBar}
        placeholder="Search Direct Messages"
        placeholderTextColor={isFocused ? "#606060" : "#606060"} // Light gray placeholder
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const MessageItem = ({ name, message, time, id, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.messageItem}>
    <Image
      style={styles.avatar}
      source={require("../../assets/goku-icon.png")}
    />
    <View style={styles.messageText}>
      <Text style={styles.userName}>{name}</Text>
      <View style={styles.messageBox}>
        <Text style={styles.userMessage}>{message}</Text>
        <Text style={styles.messageTime}>- {time}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const headerStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    paddingBottom: 9,
  },
  text: {
    color: "white",
    marginRight: 20,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "montserrat",
  },
  searchBar: {
    alignItems: "center",
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#252525",
    borderRadius: 10,
    margin: 5,
    marginTop: -5,
    textAlign: "center",
    borderColor: "#4B4B4B",
    borderWidth: 1,
    borderRadius: 40,
    height: 30,
    marginTop: 0,
    color: "#fff",
    // Adjust other styling as needed
  },
  searchBarFocused: {
    alignItems: "center",
    marginTop: 8,
    padding: 8,
    backgroundColor: "#252525",
    borderRadius: 10,
    margin: 15,
    marginTop: -5,
    textAlign: "center",
    borderColor: "#4B4B4B",
    borderWidth: 1,
    borderRadius: 40,
    height: 30,
    marginTop: 0,
    fontSize: 14,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20, // Circular avatars
    marginRight: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Match the background color to your theme
  },
  messagesContainer: {
    padding: 10,
  },
  messageItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20, // Circular avatars
    marginRight: 20,
  },
  messageText: {
    flex: 1,
  },
  userName: {
    color: "white",
    fontWeight: "bold",
  },
  userMessage: {
    color: "gray",
  },
  messageTime: {
    color: "gray",
    paddingLeft: 7,
  },
  messageBox: {
    flexDirection: "row",
    paddingVertical: 5,
  },
});
