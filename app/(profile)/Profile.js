import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Button, Text } from "react-native";
import { ProfileInfo } from "./Components/ProfileInfo";
import { ProfileContents } from "./Components/ProfileContents";
import { BackBar } from "../(user_auth)/Components";
import BottomNav from "../components/BottomNav";
import images from "../../assets/images";
import { useGlobalSearchParams } from "expo-router";
import { traverseBack } from "../(new_post)/Functions";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

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
const IP = "10.204.255.142";
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
  console.log("USER ID" + user_id);
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
    <SafeAreaView style={frames.outerFrame}>
      <View style={frames.header}>
        <Ionicons
            name="chevron-back"
                  size={24}
                  color={"#ffffff"}
                  onPress={traverseBack}
                  style={aesthetics.icon}
                ></Ionicons>
          <Text style={aesthetics.middleHeader}>Profile</Text>
          <View></View>
      </View>      
      <ScrollView style={frames.innerFrame}>
        <ProfileInfo userData={userData} />
        <ProfileContents userData={userData} postsData={postsData} />
      </ScrollView>
      <BottomNav></BottomNav>
    </SafeAreaView>
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

  header: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1b1b1b",
  },

});


const aesthetics = StyleSheet.create({
  middleHeader: {
    color: "#FFFFFF",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    flex: 1,
  },
});


// Export the sign-up-screen to other pages.
export default ProfileScreen;
