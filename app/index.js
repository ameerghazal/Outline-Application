import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";
import BottomNav from "./components/BottomNav";

//TODO: Run a conditional check to see if user is logged in.
// If user is logged in, render the home page as this page
// If user is not logged in, render the signIn/signUp Page.

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable onPress={() => router.push("Example")}>
          <Text style={styles.textStyle}>Example Page</Text>
        </Pressable>
        <Pressable onPress={() => router.push("Profile")}>
          <Text style={styles.textStyle}>Profile </Text>
        </Pressable>
        <Pressable onPress={() => router.push("SignIn")}>
          <Text style={styles.textStyle}>SignIn / SignUp</Text>
        </Pressable>
        <Pressable onPress={() => router.push("Settings")}>
          <Text style={styles.textStyle}>Settings</Text>
        </Pressable>
        <Pressable onPress={() => router.push("HomeFeed")}>
          <Text style={styles.textStyle}>Home Feed</Text>
        </Pressable>
      </View>
      <BottomNav></BottomNav>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },
  innerContainer: {
    flex: 1,
    color: "white",
    justifyContent: "center",
  },
  textStyle: {
    alignSelf: "center",
    color: "white",
  },
});
