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

export const outlines = {
  1: {
    created_at: "Mon, 22 Apr 2024 10:30:00 GMT",
    id: 2,
    is_liked: true,
    post_status_id: 2,
    post_tasks_bodies: [{ body: "Task 1 for post 2", is_checked: false }],
    user_id: 2,
  },
  2: {
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
  3: {
    created_at: "Mon, 22 Apr 2024 20:00:00 GMT",
    id: 400,
    is_liked: false,
    post_status_id: 1,
    post_tasks_bodies: [
      { body: "Task 11 for post 3", is_checked: true },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
    ],
    user_id: 3,
  },
  3: {
    created_at: "Mon, 22 Apr 2024 11:00:00 GMT",
    id: 400,
    is_liked: false,
    post_status_id: 1,
    post_tasks_bodies: [
      { body: "Task 11 for post 3", is_checked: true },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
    ],
    user_id: 3,
  },
  32: {
    created_at: "Mon, 22 Apr 2024 11:00:00 GMT",
    id: 22,
    is_liked: false,
    post_status_id: 1,
    post_tasks_bodies: [
      { body: "Task 11 for post 3", is_checked: true },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
    ],
    user_id: 3,
  },
  5: {
    created_at: "Mon, 22 Apr 2024 11:00:00 GMT",
    id: 23,
    is_liked: false,
    post_status_id: 1,
    post_tasks_bodies: [
      { body: "Task 11 for post 3", is_checked: true },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
      { body: "Task 2 for post 3", is_checked: false },
    ],
    user_id: 3,
  },
};
const IP = "10.204.255.142"
const App = () => {
  const [currUserID, setCurrUserID] = useState(null);
  const [postData, setPostData] = useState([]);
  // TODO RERENDER
  useEffect(() => {
    fetch(
      `http://${IP}:500/pullPostsFollowing?userID=${FIREBASE_AUTH.currentUser.uid}`
    )
      .then((response) => response.json())
      .then((pData) => setPostData(pData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <SafeAreaProvider style={styles.outer_frame}>
      <GeneralHeader></GeneralHeader>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {Object.values(postData).map((post) => (
          <OutlinePost post={post}></OutlinePost>
        ))}
      </ScrollView>
      <BottomNav></BottomNav>
    </SafeAreaProvider>
  );
};

{
  /* <OutlinePost
key={post.id}
itemList={post.post_tasks_bodies}
createdTime={post.created_at}
userID={post.user_id}
isLiked={post.is_liked}
          <OutlinePost post={post}></OutlinePost>

></OutlinePost> */
}

{
  /* <FlatList
data={postData}
renderItem={(post) => {
  console.warn(post);
  return <OutlinePost post={post} />;
}}
/> */
}

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
