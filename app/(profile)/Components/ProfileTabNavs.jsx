// import React, { useState } from "react";
// import { View, Text, Pressable } from "react-native";
// import { profileTabNavs } from "../styles";
// import { profileTabContents } from "../styles";
// import IbrahimOutlinePost from "./IbrahimOutlinePost";

// const list = [
//   ["Item 1", "poop", "pOOP"],
//   ["wake up", "create post time", "delete android folder"],
//   [
//     "delete ios folder",
//     "create a better method for getting outline content",
//     "too much text",
//   ],
// ];

// /**
//  * This is the middle part of the page, containing the navigation between content.
//  * Functionality: Clicking between the tabs will change what content is displayed.
//  * @author: Ibrahim Mohammad
//  * @returns Navigation bar that moves between contents of the profile page
//  */
// export const ProfileTabNavs = () => {
//   const [activeTab, setActiveTab] = useState("Outlines"); // Default active tab

//   return (
//     <View style={profileTabNavs.profileTabNavs}>
//       <ProfileTab
//         tab={"Outlines"}
//         isActive={activeTab === "Outlines"}
//         handleSetActive={() => setActiveTab("Outlines")}
//       />
//       <ProfileTab
//         tab={"Replies"}
//         isActive={activeTab === "Replies"}
//         handleSetActive={() => setActiveTab("Replies")}
//       />
//       <ProfileTab
//         tab={"Tagged"}
//         isActive={activeTab === "Tagged"}
//         handleSetActive={() => setActiveTab("Tagged")}
//       />
//       <ProfileTab
//         tab={"Likes"}
//         isActive={activeTab === "Likes"}
//         handleSetActive={() => setActiveTab("Likes")}
//       />
//     </View>
//   );
// };

// const ProfileTab = ({ tab, isActive, handleSetActive }) => {
//   const tabStyle = isActive
//     ? [profileTabNavs.TabTextContainer, profileTabNavs.active]
//     : profileTabNavs.TabTextContainer;

//   return (
//     <Pressable onPress={handleSetActive} style={tabStyle}>
//       <Text style={profileTabNavs.TabText}>{tab}</Text>
//     </Pressable>
//   );
// };

// /**
//  * MockData needs:
//  * Current Time + Time of Post
//  * list containing outline bullets
//  */

// /**
//  * //TODO: fix nirwaan's fraudlent component.
//  * @returns Content displayed (ie. user outlines, replies, tagged, likes)
//  */
// export const ProfileTabContents = ({ mockUserData }) => {
//   return (
//     <View style={profileTabContents.container}>
//       <IbrahimOutlinePost
//         itemList={list[0]}
//         mockUserData={mockUserData}
//       ></IbrahimOutlinePost>
//       <IbrahimOutlinePost
//         itemList={list[1]}
//         mockUserData={mockUserData}
//       ></IbrahimOutlinePost>
//       <IbrahimOutlinePost
//         itemList={list[2]}
//         mockUserData={mockUserData}
//       ></IbrahimOutlinePost>
//     </View>
//   );
// };
