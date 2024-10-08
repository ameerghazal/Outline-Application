import React, { useState } from "react";
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
} from "./Components.js";
import { Link, router } from "expo-router";
import { handleLoginSmall, platformSignUp, handleNext } from "./Functions.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

/**
 * Puts together the sign-up-screen based on the components we created below.
 * @returns the sign-up-screen.
 * @author Ameer G
 */
const SignUpScreen = () => {
  // Store the email and the password.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Create an account.
  async function handleSignUpFirebase() {
    // Check if the email contains an "@".
    console.log(email);
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Ensure the password contains a character, letter, and special character.
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least one letter, one number, one special character, and be at least 8 characters long."
      );
      return;
    }

    // Ensure the password is the same as the confirm password.
    if (password !== confirmPass) {
      alert("Passwords do not match.");
      return;
    }

    console.log("loe");
    // If we make it here, create the account.
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      // set the current user's UID
      const userUID = userCredentials.user.uid;
      // reference for firestore db
      const userDocRef = doc(FIREBASE_DB, "users", userUID);
      await setDoc(userDocRef, {
        email,
        userUID,
      });

      console.log("User registered successfully");
      router.push("SignUpExt");
    } catch (error) {
      console.log("here");
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
        <Text style={aesthetics.text_inspire_sign_up} numberOfLines={2}>
          Create an account and publish your daily outline to your friends.
        </Text>
        <View style={frames.user_input_frame}>
          <InputBox
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></InputBox>
          <InputBox
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></InputBox>
          <InputBox
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPass}
            onChangeText={(text) => setConfirmPass(text)}
          ></InputBox>
        </View>
        <ButtonAuth
          buttonText={"Next"}
          onPress={handleSignUpFirebase}
        ></ButtonAuth>
        <Text style={aesthetics.alterante_sign_in}>Or sign up with</Text>
        <AlternateAuth onPress={platformSignUp}></AlternateAuth>
      </View>
      <Redirection
        labelText={"Already have an account? "}
        buttonText={"Login."}
        onPress={handleLoginSmall}
      ></Redirection>
    </View>
  );
};

/**
 * Creates the markup for the sign up portion of the sign-up page.
 * @returns returns the portion of the sign-in page.
 * @author Ameer G
 */
const MiddleData = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPass,
  setConfirmPass,
}) => {
  return (
    <View style={frames.outer_frame_login}>
      <View style={frames.logo_sign_in}>
        <Text style={aesthetics.text_logo_auth}>OUT | LINE</Text>
      </View>
      <Text style={aesthetics.text_inspire_sign_up} numberOfLines={2}>
        Create an account and publish your daily outline to your friends.
      </Text>
      <UserInput
        email={email}
        password={password}
        confirmPass={confirmPass}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPass={setConfirmPass}
      ></UserInput>
      <ButtonAuth
        buttonText={"Next"}
        onPress={handleSignUpFirebase}
      ></ButtonAuth>
      <Text style={aesthetics.alterante_sign_in}>Or sign up with</Text>
      <AlternateAuth onPress={platformSignUp}></AlternateAuth>
    </View>
  );
};

/**
 * Creates the user-sign-up logic.
 * @returns user input box, reused across sign-up pages.
 * @author Ameer Ghazal
 */
const UserInput = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPass,
  setConfirmPass,
}) => {
  console.log(email);
  return (
    <View style={frames.user_input_frame}>
      <InputBox
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></InputBox>
      <InputBox
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      ></InputBox>
      <InputBox
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPass}
        onChangeText={(text) => setConfirmPass(text)}
      ></InputBox>
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
    gap: 60,
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

  // Used for the sign-in page.
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

  text_inspire_sign_up: {
    color: "#ffffff",
    fontWeight: "500",
    textAlign: "center",
    width: 270,
  },

  alterante_sign_in: {
    textAlign: "center",
    fontSize: 16,
    color: "#ffffff",
  },

  // btn_forgot_password: {
  //   alignSelf: "flex-end",
  // },

  // forgot_password_text: {
  //   color: "#8dac83",
  //   fontWeight: "bold",
  //   fontFamily: "Montserrat",
  //   fontSize: 12,
  // },
});

// Export the sign-up-screen to other pages.
export default SignUpScreen;
