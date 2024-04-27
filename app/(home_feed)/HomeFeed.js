import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import OutlinePost from "../components/OutlinePost.js";
import OutlinePostEditable from "../components/OutlinePostEditable.js";
import BottomNav from "../components/BottomNav.js";
import GeneralHeader from "../components/GeneralHeader.js";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const list = ["Item 1", "poop", "pOOP"];
curr_user_id = 1;

const App = () => {
  const insets = useSafeAreaInsets();
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.1.101:80/pullPostsFollowing`)
      .then((response) => response.json())
      .then((data) => setPostData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(postData);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/pullUserData?curr_user_id=${curr_user_id}`)
  //     .then((response) => response.json())
  //     .then((data) => setUserData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  return (
    <SafeAreaProvider style={styles.outer_frame}>
      <GeneralHeader></GeneralHeader>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {Object.values(postData).map((post) => (
          <OutlinePost
            key={post.id}
            itemList={post.post_tasks_bodies}
            username={`User ${post.user_id}`}
            createdTime={post.created_at}
            userHandle={`@user${post.user_id}`}
          ></OutlinePost>
        ))}
      </ScrollView>
      <BottomNav></BottomNav>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  outer_frame: {
    paddingTop: 50,
    backgroundColor: "#1B1B1B",
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    overflow: "hidden",
  },
});
export default App;
