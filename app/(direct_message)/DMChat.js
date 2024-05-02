import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useState, useCallback, useEffect } from "react";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Composer,
} from "react-native-gifted-chat";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebase";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

const DMChat = () => {
  const params = useLocalSearchParams();
  const { uid } = params;
  console.log(uid);
  const [messages, setMessages] = useState([]);
  const currentUser = FIREBASE_AUTH?.currentUser?.uid;

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: "Hello developer",
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: "React Native",
  //         avatar: "https://placeimg.com/140/140/any",
  //       },
  //     },
  //   ]);
  // }, []);

  useEffect(() => {
    const chatId =
      uid > currentUser
        ? `${uid + "-" + currentUser}`
        : `${currentUser + "-" + uid}`;
    const docRef = doc(FIREBASE_DB, "chatrooms", chatId);
    const colRef = collection(docRef, "messages");
    const q = query(colRef, orderBy("createdAt", "desc"));
    const docSnap = onSnapshot(q, (onSnap) => {
      const allMsg = onSnap.docs.map((mes) => {
        if (mes.data().createdAt) {
          return {
            ...mes.data(),
            createdAt: mes.data().createdAt.toDate(),
          };
        } else {
          return {
            ...mes.data(),
            createdAt: new Date(),
          };
        }
      });
      setMessages(allMsg);
    });
  }, []);

  const onSend = useCallback((messagesArray) => {
    const msg = messagesArray[0];
    const myMsg = {
      ...msg,
      sentBy: currentUser,
      sentTo: uid,
    };
    console.log(myMsg);

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, myMsg)
    );
    const chatId =
      uid > currentUser
        ? `${uid + "-" + currentUser}`
        : `${currentUser + "-" + uid}`;
    const docRef = doc(FIREBASE_DB, "chatrooms", chatId);
    const colRef = collection(docRef, "messages");
    const chatSnap = addDoc(colRef, {
      ...myMsg,
      createdAt: serverTimestamp(),
    });
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#4b4b4b", // Style for incoming text bubble
          },
          right: {
            backgroundColor: "#8dac83", // Style for outgoing text bubble
          },
        }}
        textStyle={{
          left: {
            color: "#fffafa", // Text color for incoming messages
          },
          right: {
            color: "#fffafa", // Text color for outgoing messages
          },
        }}
      />
    );
  };

  const renderInputToolbar = (props) => {
    // Apply additional styles to InputToolbar if needed
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          borderTopWidth: 0, // Removes the border at the top
          borderRadius: 25,
          // paddingVertical: 5, // Adjust vertical padding if needed
          paddingHorizontal: 10, // Adjust horizontal padding if needed
          backgroundColor: "#1b1b1b", // Adjust background color
        }}
      />
    );
  };

  const renderComposer = (props) => {
    return (
      <Composer
        {...props}
        textInputStyle={{
          color: "#fff", // Text color
          backgroundColor: "#1b1b1b", // Background color of the text input
          borderRadius: 20, // Rounded corners
          borderColor: "rgba(255, 255, 255, 0.5)",
          borderWidth: 1, // Set the thickness of the border
          paddingTop: 8.5, // Adjust the top padding
          paddingHorizontal: 12, // Padding on sides
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1b1b1b" }}>
      <GiftedChat
        messages={messages}
        onSend={(text) => onSend(text)}
        user={{
          _id: currentUser,
        }}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
      />
    </SafeAreaView>
  );
};

export default DMChat;
