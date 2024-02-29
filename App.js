import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

function Layout() {
  return (
    <View>
      <Text style={styles.text}>Feed</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Layout />
      {/* <Image
        style={styles.icon}
        source={require("./assets/outicon.png")}
      ></Image> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: { width: 60, height: 60 },
  text: { color: "#fffffa" },
});
