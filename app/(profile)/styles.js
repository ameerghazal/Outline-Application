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
    color: "white",
    fontSize: 28,
    fontWeight: 500,
    letterSpacing: 2,
    padding: 5,
  },
  DisplayHandle: {
    color: "white",
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
  DisplayStats: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 400,
    textAlign: "center",
    letterSpacing: 1,
  },
  BtnEditProfile: {
    paddingLeft: 30,
    paddingRight: 30,
    padding: 5,
    fontSize: 12,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
  },
  ProfileBioContainer: {
    // backgroundColor: "red",
    paddingLeft: 15,
    paddingRight: 15,
  },
  BioText: { color: "#777", textAlign: "center" },
});
