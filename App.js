import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1B1B",
    paddingHorizontal: 25,
  },
  text: { color: "#FFFAFA" },
  image: { borderRadius: 100 },
});

const profilePic = require("./assets/goku-icon.png");
const settingsIcon = require("./assets/settings-icon.png");

function FeedTop() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Image source={profilePic} style={styles.image} />
      <Text style={styles.text}>Outline</Text>
      <Image source={settingsIcon} />
    </View>
  );
}

function Feed() {
  return (
    <View>
      <Text style={styles.text}>Feed</Text>
    </View>
  );
}
export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <FeedTop />
      <Feed />
    </SafeAreaProvider>
  );
}
