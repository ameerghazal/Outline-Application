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

const DMChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
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
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1, // Assuming the user's ID is 1
        }}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
      />
    </SafeAreaView>
  );
};

export default DMChat;

// import { useRoute } from "expo-router";
// import { GiftedChat } from "react-native-gifted-chat";
// import { FIREBASE_AUTH } from "../../firebase";
// import { StreamChat } from "stream-chat";

// const API_KEY = "g4b87ea9prkh";
// const client = StreamChat.getInstance(API_KEY);
// const currentUser = FIREBASE_AUTH?.currentUser?.uid;

// const DMChat = () => {
//   useEffect(() => {
//     const connectUser = async () => {
//       await client.connectUser(
//         {
//           id: "Rajie",
//           name: "Ahmed Raja",
//           image: "../../assets/zekePfp.png",
//         },
//         client.devToken(`{currentUser}`)
//       );
//       console.log("User Connected");
//     };

//     connectUser();
//   }, []);

//   return <Text>Placeholder</Text>;
// };

// export default DMChat;

// Gifted Chat
//const DMChat = (route) => {
//   // const uid = route.params.uid;
//   const [messages, setMessages] = useState([]);
//   const currentUser = FIREBASE_AUTH?.currentUser?.uid;
//   console.log(currentUser);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: "Hello developer",
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: "React Native",
//           avatar: "../../assets/rintwt.jpg",
//         },
//       },
//     ]);
//   }, []);

//   const onSend = useCallback((messagesArray) => {
//     const msg = messagesArray[0];
//     // console.log(myMsg);
//     const myMsg = {
//       msg,
//       sentBy: currentUser,
//       sentTo: uid,
//     };
//     // setMessages((previousMessages) =>
//     //   GiftedChat.append(previousMessages, messages)
//     // );
//   }, []);

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={(text) => onSend(text)}
//       user={{
//         _id: currentUser,
//       }}
//       containerStyle={{
//         backgroundColor: "#ffff00", // Set the background color here
//       }}
//     />
//   );
// };

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
