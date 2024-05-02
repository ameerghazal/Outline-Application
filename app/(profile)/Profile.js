import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Button } from "react-native";
import { ProfileInfo } from "./Components/ProfileInfo";
import { ProfileContents } from "./Components/ProfileContents";
import { BackBar } from "../(user_auth)/Components";
import BottomNav from "../components/BottomNav";
import images from "../../assets/images";
import { firebase } from "@react-native-firebase/auth";
import { FIREBASE_AUTH } from "../../firebase";
import { useGlobalSearchParams } from "expo-router";

// const mockUserData = [
//   {
//     userInfo: {
//       displayName: "phang (7.0 gpa)",
//       displayHandle: "mollywhoppa",
//       outlineCt: 42,
//       followerCt: 987,
//       followingCt: 150,
//       imageURL: images.ichigoIcon,
//       bio: "one week she love me, one week she hate me, both weeks i got paid. Follow me on linkedin: linkedin.com/brahimt2",
//     },
//     posts: [
//       {
//         content: ["First post of phang"],
//         timePosted: new Date().toISOString(),
//         // Add additional post information here
//       },
//     ],
//   },
//   {
//     userInfo: {
//       displayName: "Moaz Asim",
//       displayHandle: "brown_boy_999",
//       outlineCt: 25,
//       followerCt: 456,
//       followingCt: 212,
//       imageURL: images.chadIcon,
//       bio: "Guys help im trapped in outline ",
//     },
//     posts: [
//       {
//         content: ["First post of Moaz"],
//         timePosted: new Date().toISOString(),
//         // Add additional post information here
//       },
//       {
//         content: ["Second post of Moaz"],
//         timePosted: new Date().toISOString(),
//         // Add additional post information here
//       },
//     ],
//   },
//   {
//     userInfo: {
//       displayName: "Hassaan Basit",
//       displayHandle: "cactus5pf",
//       outlineCt: 75,
//       followerCt: 12000,
//       followingCt: 3,
//       imageURL: images.renjiIcon,
//       bio: "michigan squirrels got to me. amos: hassanbasit",
//     },
//     posts: [
//       {
//         content: ["First post of Hassaan"],
//         timePosted: new Date().toISOString(),
//         // Add additional post information here
//       },
//       {
//         content: ["Second post of Hassaan"],
//         timePosted: new Date().toISOString(),
//         // Add additional post information here
//       },
//       {
//         content: ["Third post of Hassaan"],
//         timePosted: new Date().toISOString(),
//         // Add additional post information here
//       },
//     ],
//   },
// ];
const IP = "10.204.173.240";
/**
 * Highest Level of Component tree, calls backend for data and passes throughout the page
 * @author: Ibrahim Mohammad
 * @returns Default Page to be displayed
 */
const ProfileScreen = () => {
  // Grab the parameters.
  const { user_id } = useGlobalSearchParams();
  const [userData, setUserData] = useState([]); // Initialize with the first user
  const [postsData, setPostsData] = useState([]);

  // checking if current rendered user is equal to user being rendered
  const isCurrentUser = FIREBASE_AUTH.currentUser.uid == user_id;

  // Random Number for the page swap
  const handleUserChange = (index) => {
    setUserData(mockUserData[index].userInfo);
    setPostsData(mockUserData[index].posts);
  };

  // Pull the user data based on the specific user_id passed in.
  useEffect(() => {
    fetch(`http://${IP}:500/pullUserData?userID=${user_id}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(userData);

  // Pull the post data based on the specific user_id passed in.
  useEffect(() => {
    fetch(`http://${IP}:500/pullPostsUser?userID=${user_id}`)
      .then((response) => response.json())
      .then((data) => setPostsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(postsData);

  return (
    <View style={frames.outerFrame}>
      <BackBar />
      <View style={frames.buttonCase}>
        <Button title="phang" onPress={() => handleUserChange(0)} />
        <Button title="moaz" onPress={() => handleUserChange(1)} />
        <Button title="cactus" onPress={() => handleUserChange(2)} />
      </View>
      <ScrollView style={frames.innerFrame}>
        <ProfileInfo userData={userData} isCurrentUser={isCurrentUser} />
        <ProfileContents userData={userData} postsData={postsData} />
      </ScrollView>
      <BottomNav></BottomNav>
    </View>
  );
};

const frames = StyleSheet.create({
  outerFrame: {
    backgroundColor: "#1B1B1B",
    flex: 1,
  },
  buttonCase: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  innerFrame: {
    flex: 1,
  },
});

// Export the sign-up-screen to other pages.
export default ProfileScreen;
