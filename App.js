import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import BottomNav from "./components/BottomNav.js";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1B1B",
  },
  text: { color: "#FFFAFA" },
  image: { borderRadius: 100 },
});

const profilePic = require("./assets/goku-icon.png");
const settingsIcon = require("./assets/settings-icon.png");
const outlineIcon = require("./assets/outline-icon.png");

function FeedTop() {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <View
        style={{
          paddingTop: insets.top,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 25,
        }}
      >
        <Image source={profilePic} style={styles.image} />
        <Image source={outlineIcon} />
        <Image source={settingsIcon} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          paddingHorizontal: 60,
        }}
      >
        <Text style={styles.text}>For you</Text>
        <Text style={styles.text}>Friends</Text>
      </View>
    </View>
  );
}

function Feed() {
  return (
    <View style={{ paddingHorizontal: 25 }}>
      <Text style={styles.text}>Feed</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <FeedTop />
      <Feed />
      <BottomNav />
    </SafeAreaProvider>
  );
}
