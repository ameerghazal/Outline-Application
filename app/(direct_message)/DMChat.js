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
import { useRoute } from "expo-router";

import { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const DMChat = () => {
  const [messages, setMessages] = useState([]);
  const

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "../../assets/rintwt.jpg",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messagesArray) => {
    const msg = messagesArray[0];
    // console.log(myMsg);
    const myMsg = {
      msg,
    };
    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, messages)
    // );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(text) => onSend(text)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default DMChat;

// // dummy data
// const messages = [
//   {
//     name: "Nerdwaan",
//     id: 1,
//     text: "Hello there!",
//     senderId: 5,
//     receiverId: "currentUser",
//     timestamp: "10:00 AM",
//   },
//   {
//     name: "AG",
//     id: 2,
//     text: "Hey! How are you?",
//     senderId: "currentUser",
//     receiverId: 4,
//     timestamp: "10:02 AM",
//   },
// ];

// const DMChat = (msg) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Chat with {}</Text>
//       <ScrollView style={styles.messagesContainer}>
//         {messages.map((message) => (
//           <Text key={message.id} style={styles.message}>
//             {message.text}
//           </Text>
//         ))}
//       </ScrollView>
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.input} placeholder="Type a message..." />
//         <TouchableOpacity style={styles.sendButton}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "white",
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: "bold",
//     padding: 10,
//   },
//   messagesContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   message: {
//     fontSize: 16,
//     marginVertical: 5,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     padding: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "gray",
//     marginRight: 10,
//     borderRadius: 5,
//     padding: 10,
//   },
//   sendButton: {
//     padding: 10,
//     backgroundColor: "#007BFF",
//     borderRadius: 5,
//   },
//   sendButtonText: {
//     color: "white",
//   },
// });

// export default DMChat;
