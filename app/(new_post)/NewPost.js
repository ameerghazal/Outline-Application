import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import Constants from "expo-constants";
import AppButton from "../components/AppButton";
import OutlineEditList from "../components/OutlineEditList";
import { traverseBack } from "./Functions";
import { FIREBASE_AUTH } from "../../firebase";
import { router } from "expo-router";

const IP = "10.204.255.142";

export default function NewPost() {
  const [outlineState, setOutlineState] = useState([]);
  const [currUserID, setCurrUserID] = useState(null);

  const handleOutlineChange = (newOutlineState) => {
    setOutlineState(newOutlineState);
  };

  const handlePost = async () => {
    const currentUser = FIREBASE_AUTH.currentUser.uid;
    setCurrUserID(currentUser);

    const jsonPostData = {
      user_id: currentUser,
      post_tasks: outlineState,
    };
    // Do something with outlineState when Post button is pressed
    fetch(`http://${IP}:500/pushPosts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonPostData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data pushed successfully:", data);
        router.navigate("/HomeFeed");
      })
      .catch((error) => {
        console.error("Error pushing data:", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppButton
          title="Cancel"
          size="sm"
          color="#FFFAFA"
          backgroundColor="transparent"
          onPress={traverseBack}
        ></AppButton>
        <Text style={styles.header_text}>NEW POST</Text>
        <AppButton
          title="Post"
          size="sm"
          backgroundColor="#8DAC83"
          color="FFFAFA"
          onPress={handlePost}
        ></AppButton>
      </View>
        <OutlineEditList onChange={handleOutlineChange} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
  },
  header: {
    width: "100%",
    backgroundColor: "#1B1B1B",
    alignItems: "center",
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.25,
    borderBottomColor: "#656060",
    borderBottomEndRadius: 1,
  },
  header_text: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#8DAC83",
  },

});
