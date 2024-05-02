import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { MessageItem, DMHeader } from "./Components";
import { openChat } from "./Functions";
import { useState, useEffect } from "react";
import BottomNav from "../components/BottomNav";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB, FIREBASE_AUTH } from "../../firebase";

const DMListScreen = () => {
  const [chats, setChats] = useState([]);
  const currentUserUid = FIREBASE_AUTH.currentUser.uid;

  useEffect(() => {
    const chatroomsRef = collection(FIREBASE_DB, "chatrooms");
    const q = query(chatroomsRef, where("sentTo", "==", currentUserUid));
    console.log(q);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chats = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChats(chats);
      console.log(chats);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <DMHeader />
      <ScrollView style={styles.messagesContainer}>
        {chats.length > 0 ? (
          chats.map((chat) => (
            <MessageItem
              key={chat.id}
              name={chat.name} // Name of the other participant or chat name
              message={chat.text} // Last message text
              time={new Date(
                chat.createdAt.seconds * 1000
              ).toLocaleTimeString()} // Formatting timestamp
              id={chat.id}
              onPress={() => openChat(chat.id, chat.name)}
            />
          ))
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>Start a new chat!</Text>
          </View>
        )}
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
  },
  messagesContainer: {
    flex: 1, // This ensures that ScrollView only takes available space after BottomNav
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
  noResultsText: {
    color: "#fffafa",
    textAlign: "center",
    paddingTop: 10,
  },
});

export default DMListScreen;
