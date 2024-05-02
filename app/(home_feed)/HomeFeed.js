import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, StyleSheet, FlatList } from "react-native";
import OutlinePost from "../components/OutlinePost.js";
import OutlinePostEditable from "../components/OutlinePostEditable.js";
import BottomNav from "../components/BottomNav.js";
import GeneralHeader from "../components/GeneralHeader.js";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../firebase.js";

const App = () => {
  const [currUserID, setCurrUserID] = useState(null);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await FIREBASE_AUTH.currentUser.uid;
        setCurrUserID(currentUser);

        const response = await fetch(
          `http://localhost:80/pullPostsFollowing?userID=${currentUser}`
        );
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(currUserID);
  console.log(postData);

  const jsonData = {
    2: {
      created_at: "Mon, 22 Apr 2024 10:30:00 GMT",
      id: 2,
      is_liked: true,
      post_status_id: 2,
      post_tasks_bodies: [{ body: "Task 1 for post 2", is_checked: false }],
      user_id: 2,
    },
    3: {
      created_at: "Mon, 22 Apr 2024 11:00:00 GMT",
      id: 3,
      is_liked: false,
      post_status_id: 1,
      post_tasks_bodies: [
        { body: "Task 1 for post 3", is_checked: true },
        { body: "Task 2 for post 3", is_checked: false },
      ],
      user_id: 3,
    },
  };

  if (postData.length === 0) setPostData(() => jsonData);

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
            postID={post.id}
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
