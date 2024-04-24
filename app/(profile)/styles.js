import React from "react";
import { StyleSheet } from "react-native-web";

export const profileContents = StyleSheet.create({
  ProfileText: {
    color: "#FFFAFA",
  },
  ProfileContents: {
    color: "#FFFAFA",
  },
  IconContainer: {
    alignSelf: "center",
    borderRadius: 50,
  },
  ProfileIcon: {
    width: 150,
    height: 150,
    borderRadius: 999,
  },
  ProfileNameContainer: {
    alignSelf: "center",
  },
  DisplayName: {
    color: "#FFFAFA",
    fontSize: 28,
    fontWeight: 500,
    letterSpacing: 2,
    padding: 5,
  },
  DisplayHandle: {
    color: "#FFFAFA",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    letterSpacing: 2,
    padding: 5,
  },
  ProfileStatsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
    paddingTop: 0,
    padding: 10,
  },
  StatTextStyle: { color: "#8dac83" },
  DisplayStats: {
    color: "#FFFAFA",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "center",
    letterSpacing: 1,
  },
  BtnEditProfile: {
    letterSpacing: 1,
    fontWeight: "400",
    paddingLeft: 30,
    paddingRight: 30,
    padding: 5,
    fontSize: 12,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#FFFAFA",
    borderRadius: 50,
  },
  ProfileBioContainer: {
    // backgroundColor: "red",
    paddingLeft: 15,
    paddingRight: 15,
  },
  BioText: { color: "#777", textAlign: "center" },
});

export const profileTabNavs = StyleSheet.create({
  ProfileTabNavs: {
    height: 42,
    flexDirection: "row",
  },
  TabTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 2, // Always have a border but make it transparent by default
    borderColor: "transparent", // Transparent border for inactive tabs
  },
  TabText: {
    color: "#FFFAFA",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 2,
  },
  active: {
    borderColor: "#8dac83", // Only change the color for active tabs
  },
});
