import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import BottomNav from "./components/BottomNav";
import { useFonts } from "expo-font";

//TODO: Run a conditional check to see if user is logged in.
// If user is logged in, render the home page as this page
// If user is not logged in, render the signIn/signUp Page.

export default function Page() {
  let [fontsLoaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
    MontserratMediumItalic: require("../assets/fonts/Montserrat-MediumItalic.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable onPress={() => router.push("Example")}>
          <Text style={styles.textStyle}>Click for Example</Text>
        </Pressable>
        <Pressable onPress={() => router.push("Profile")}>
          <Text style={styles.textStyle}>Click for Profile Page</Text>
        </Pressable>
        <Pressable onPress={() => router.push("SignIn")}>
          <Text style={styles.textStyle}>Push for Ameer</Text>
        </Pressable>
        <Pressable onPress={() => router.push("Settings")}>
          <Text style={styles.textStyle}>Push for Settings</Text>
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
    paddingTop: 50,
  },
  innerContainer: {
    flex: 1,
    color: "white",
  },
  textStyle: {
    alignSelf: "center",
    color: "white",
  },
});
