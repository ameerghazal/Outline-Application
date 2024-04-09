import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { MessageItem, DMHeader } from "./Components";

const messages = [
  { id: "1", name: "NerdWaan", message: "i like persona5...", time: "1h" },
  { id: "2", name: "AG", message: "2024! MUSIC.", time: "3h" },
  // ... Add the rest of your messages here
];

const DMListScreen = () => {
  return (
    <View style={styles.container}>
      <DMHeader />
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg) => (
          <MessageItem
            key={msg.id}
            name={msg.name}
            message={msg.message}
            time={msg.time}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B", // Match the background color to your theme
  },
  messagesContainer: {
    padding: 10,
  },
  messageItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray", // Use a color that matches your theme
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
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
});

export default DMListScreen;
