import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import OutlinePost from "../components/OutlinePost.js";
import OutlinePostEditable from "../components/OutlinePostEditable.js";
import BottomNav from "../components/BottomNav.js";
import GeneralHeader from "../components/GeneralHeader.js";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const list = ["Item 1", "poop", "pOOP"];

const App = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={styles.outer_frame}>
      <GeneralHeader></GeneralHeader>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <OutlinePost itemList={list}></OutlinePost>
        <OutlinePostEditable itemList={list}></OutlinePostEditable>
        <OutlinePost itemList={list}></OutlinePost>
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
