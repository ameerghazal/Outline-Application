import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import {
  BackBar,
  InputBox,
  AlternateAuth,
  ButtonAuth,
  Redirection,
} from "../(user_auth)/Components.js";
import { router } from "expo-router";
import {
  handleForgotPassword,
  platformSignIn,
} from "../(user_auth)/Functions.js";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { FIREBASE_AUTH } from "../../firebase.js";

/**
 * Puts together the sign-in.-screen based on the components we created below.
 * @returns the sign-in-screen.
 * @author Ameer G
 */
const ResetConformation = () => {
  // Store the email and the password.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login into the account.
  async function handleSignInFirebase() {
    // Check if the email contains an "@".
    console.log(email);
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // If we make it here, login to the account.
    try {
      const auth = FIREBASE_AUTH;
      await signInWithEmailAndPassword(auth, email, password);
      router.push("PasswordResetPage");
    } catch (error) {
      alert(
        "There is not an account with this combination of email and password."
      );
      console.log(error.message);
    }
  }

  return (
    <View style={frames.outer_frame}>
      <BackBar></BackBar>
      <View style={frames.outer_frame_login}>
        <View style={frames.logo_sign_in}>
          <Text style={aesthetics.text_logo_auth}>OUT | LINE</Text>
        </View>
        <View style={frames.user_input_frame}>
          <InputBox
            placeholder="Email or Username"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></InputBox>
          <View style={frames.user_password_frame}>
            <InputBox
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            ></InputBox>
            <TouchableOpacity
              style={aesthetics.btn_forgot_password}
              onPress={handleForgotPassword}
            >
              <Text style={aesthetics.forgot_password_text}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ButtonAuth
          buttonText={"Login"}
          onPress={handleSignInFirebase}
        ></ButtonAuth>
      </View>
    </View>
  );
};

/**
 * Below are all of the styles used.
 * Frames refers to containers, views, etc.
 * Inputs refer to input boxes, some buttons, etc.
 * Aesthetics refer to text, btns, specific styles, borders, etc.
 * @author Ameer G
 */
const frames = StyleSheet.create({
  outer_frame: {
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#1B1B1B",
    flex: 1,
    gap: 100,
  },

  outer_frame_login: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  logo_sign_in: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  user_input_frame: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
  },

  user_password_frame: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: 10,
  },
});

const aesthetics = StyleSheet.create({
  text_logo_auth: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "white",
  },

  btn_forgot_password: {
    alignSelf: "flex-end",
  },

  forgot_password_text: {
    color: "#8dac83",
    fontWeight: "bold",
    fontFamily: "Montserrat",
    fontSize: 12,
  },

  alterante_sign_in: {
    textAlign: "center",
    fontSize: 16,
    color: "#ffffff",
  },
});

// Export the reset conformation screen to other pages.
export default ResetConformation;
