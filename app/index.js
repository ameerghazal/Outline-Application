import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "../components/BottomNav.js";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1B1B",
    height: "100%",
  },
  text: { color: "#FFFAFA" },
  image: { borderRadius: 100 },
});

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home page</Text>

      <BottomNav />
    </View>
  );
}
