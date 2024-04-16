import React from "react";
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
import {
  handleForgotPassword,
  handleSignUpSmall,
  handleUserAuth,
  platformSignIn,
} from "./Functions.js";

/**
 * Puts together the sign-in.-screen based on the components we created below.
 * @returns the sign-in-screen.
 * @author Ameer G
 */
const SignInScreen = () => {
  return (
    <View style={frames.outer_frame}>
      <BackBar></BackBar>
      <MiddleData></MiddleData>
      <Redirection
        labelText={"New to Outline? "}
        buttonText={"Sign up."}
        onPress={handleSignUpSmall}
      ></Redirection>
    </View>
  );
};

/**
 * Creates the markup for the login portion of the sign-in page.
 * Featuring inputs, forgot password, login button, sepearte login, and more.
 * @returns returns the login portion of the sign-in page.
 * @author Ameer G
 */
const MiddleData = () => {
  return (
    <View style={frames.outer_frame_login}>
      <View style={frames.logo_sign_in}>
        <Text style={aesthetics.text_logo_auth}>OUT | LINE</Text>
      </View>
      <UserInput></UserInput>
      <ButtonAuth buttonText={"Login"} onPress={handleUserAuth}></ButtonAuth>
      <Text style={aesthetics.alterante_sign_in}>Or sign in with</Text>
      <AlternateAuth onPress={platformSignIn}></AlternateAuth>
    </View>
  );
};

/**
 * Creates the user-sign-in logic.
 * @returns user input box, reused across sign-up pages.
 * @author Ameer Ghazal
 */
const UserInput = () => {
  return (
    <View style={frames.user_input_frame}>
      <InputBox placeholder="Email or Username"></InputBox>
      <View style={frames.user_password_frame}>
        <InputBox placeholder="Password" secureTextEntry={true}></InputBox>
        <TouchableOpacity
          style={aesthetics.btn_forgot_password}
          onPress={handleForgotPassword}
        >
          <Text style={aesthetics.forgot_password_text}>Forgot Password?</Text>
        </TouchableOpacity>
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

// Export the sign-up-screen to other pages.
export default SignInScreen;
