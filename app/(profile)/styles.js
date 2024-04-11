import React from "react";
import { StyleSheet } from "react-native-web";

export const frames = StyleSheet.create({
  ProfileText: {
    color: "white",
  },
  ProfileContents: {
    color: "#fff",
  },
  IconContainer: {
    maxWidth: 100,
    alignSelf: "center",
    borderRadius: 50,
  },
  ProfileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  ProfileNameContainer: {
    alignSelf: "center",
  },
  DisplayName: {
    color: "white",
    fontSize: 28,
    fontWeight: 500,
    letterSpacing: 2,
  },
  DisplayHandle: {
    color: "white",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    letterSpacing: 2,
  },
  ProfileBioContainer: {
    alignSelf: "center",
    flexDirection: "row",
  },
  ProfileStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    padding: 15,
  },
  DisplayStats: {
    color: "white",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    letterSpacing: 2,
  },
  BtnEditProfile: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#555",
    borderRadius: 50,
    alignSelf: "center",
  },
});
