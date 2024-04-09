import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export const DMHeader = (pfp) => (
  <View style={headerStyles.mainContainer}>
    <View style={headerStyles.container}>
      <Image
        style={styles.avatar}
        source={require("../../assets/zekePfp.png")}
      />
      <Text style={headerStyles.text}>Messages</Text>
      <Text style={headerStyles.text}>placeholder</Text>
    </View>
    <TextInput
      style={headerStyles.searchBar}
      placeholder="Search Direct Messages"
      // Include other props as necessary, like onChangeText for handling input
    />
  </View>
);

export const MessageItem = ({ name, message, time }) => (
  <TouchableOpacity style={styles.messageItem}>
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
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: "white",
  },
  searchBar: {
    alignItems: "center",
    marginTop: 8,
    padding: 8,
    backgroundColor: "#252525",
    borderRadius: 10,
    margin: 15,
    marginTop: -5,
    // Adjust other styling as needed
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
    marginRight: 10,
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
    color: "white",
    paddingLeft: 10,
  },
  messageBox: {
    flexDirection: "row",
  },
});
