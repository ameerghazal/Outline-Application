import React from "react";
import { StyleSheet } from "react-native-web";

export const profileInfo = StyleSheet.create({
  profileInfo: {
    // flex: 1,
  },
  profileMainContainer: {},
  iconContainer: {
    alignSelf: "center",
    borderRadius: 50,
  },
  profileIcon: {
    width: 150,
    height: 150,
    borderRadius: 999,
  },
  profileNameContainer: {
    alignSelf: "center",
  },
  displayName: {
    color: "#FFFAFA",
    fontSize: 28,
    fontWeight: 500,
    letterSpacing: 2,
    padding: 5,
  },
  displayHandle: {
    color: "#FFFAFA",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    letterSpacing: 2,
    padding: 5,
  },
  profileDetailContainer: {},
  profileStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
    paddingTop: 0,
    padding: 10,
  },
  statTextStyle: { color: "#8dac83" },
  displayStats: {
    color: "#FFFAFA",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "center",
    letterSpacing: 1,
  },
  btnEditProfile: {
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
  btnEditProfileText: {
    color: "white",
  },
  profileBioContainer: {
    // backgroundColor: "red",
    paddingLeft: 15,
    paddingRight: 15,
  },
  bioText: { color: "#777", textAlign: "center" },
});

export const profileTabNavs = StyleSheet.create({
  profileTabNavs: {
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

export const profileTabContents = StyleSheet.create({
  container: {},
});
