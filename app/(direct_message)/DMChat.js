import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useRoute } from "expo-router";

// dummy data
const messages = [
  {
    name: "Nerdwaan",
    id: 1,
    text: "Hello there!",
    senderId: 5,
    receiverId: "currentUser",
    timestamp: "10:00 AM",
  },
  {
    name: "AG",
    id: 2,
    text: "Hey! How are you?",
    senderId: "currentUser",
    receiverId: 4,
    timestamp: "10:02 AM",
  },
];

const DMChat = (msg) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat with {msg.name}</Text>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message) => (
          <Text key={message.id} style={styles.message}>
            {message.text}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type a message..." />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  message: {
    fontSize: 16,
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
  },
  sendButton: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  sendButtonText: {
    color: "white",
  },
});

export default DMChat;
