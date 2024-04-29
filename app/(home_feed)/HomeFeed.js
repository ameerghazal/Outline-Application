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

currUserID = 1;

const App = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:80/pullPostsFollowing?userID=${currUserID}`)
      .then((response) => response.json())
      .then((data) => setPostData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(postData);

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
            createdTime={post.created_at}
            userID={post.user_id}
            isLiked={post.is_liked}
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
