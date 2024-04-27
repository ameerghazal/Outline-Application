import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import BottomNav from "./components/BottomNav";

//TODO: Run a conditional check to see if user is logged in.
// If user is logged in, render the home page as this page
// If user is not logged in, render the signIn/signUp Page.

export default function Page() {
  return (
    <View style={frames.outer_frame}>
      <View style={frames.inner_frame}>
        <View style={frames.logo_sign_in}>
          <Text style={aesthetics.text_logo_auth}>OUT | LINE</Text>
        </View>
        <View style={frames.button_choices}>
          <TouchableOpacity
            style={[aesthetics.btn_opening, aesthetics.btn_login]}
            onPress={() => router.push("SignIn")}
          >
            <Text style={(aesthetics.btn_opening_text, { color: "#000000" })}>
              {"Login"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[aesthetics.btn_opening]}
            onPress={() => router.push("SignUp")}
          >
            <Text style={(aesthetics.btn_opening_text, { color: "#ffffff" })}>
              {"Sign Up"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.innerContainer}>
    //     <Pressable onPress={() => router.push("Example")}>
    //       <Text style={styles.textStyle}>Example Page</Text>
    //     </Pressable>
    //     <Pressable onPress={() => router.push("Profile")}>
    //       <Text style={styles.textStyle}>Profile </Text>
    //     </Pressable>
    //     <Pressable onPress={() => router.push("SignIn")}>
    //       <Text style={styles.textStyle}>SignIn / SignUp</Text>
    //     </Pressable>
    //     <Pressable onPress={() => router.push("Settings")}>
    //       <Text style={styles.textStyle}>Settings</Text>
    //     </Pressable>
    //     <Pressable onPress={() => router.push("HomeFeed")}>
    //       <Text style={styles.textStyle}>Home Feed</Text>
    //     </Pressable>
    //   </View>
    //   <BottomNav></BottomNav>
    // </View>
  );
}

const frames = StyleSheet.create({
  outer_frame: {
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#1B1B1B",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },

  inner_frame: {
    display: "flex",
    flexDirection: "column",
    gap: 64,
    marginTop: -50,
  },

  logo_sign_in: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button_choices: {
    display: "flex",
    flexDirection: "column",
    gap: "16",
    alignItems: "center",
  },
});

const aesthetics = StyleSheet.create({
  text_logo_auth: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "white",
  },

  btn_opening: {
    width: 320,
    height: 50,
    borderRadius: 10,
    borderColor: "#4b4b4b",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btn_login: {
    backgroundColor: "#8dac83",
  },

  btn_opening_text: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: 16,
  },
});
