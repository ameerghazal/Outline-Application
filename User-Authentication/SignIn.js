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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * Goes back to the previous page.
 * TODO: Implement and make genric.
 * @author Ameer G.
 */
function traverseBack() {}

/**
 * Prompts the user with Google or Apple sign-in.
 * TODO: Implement and make it genric with sign-up.
 * @author Ameer G.
 */
function platformSignIn() {}

/**
 * Handles the user sign-up by moving them to the sign up page.
 * @author Ameer G
 */
function handleSignUp() {}

/**
 * Redirect the user to the forgot password page.
 * @author Ameer G
 */
function handleForgotPassword() {}

/**
 * Puts together the sign-up-screen based on the components we created below.
 * @returns the sign-up-screen.
 * @author Ameer G
 */
const SignUpScreen = () => {
  return (
    <View style={frames.outer_frame}>
      <Header></Header>
      <Login></Login>
      <NeedOrHave></NeedOrHave>
    </View>
  );
};

/**
 * General header component for multiple pages.
 * Features a general back cheveron button,
 * @returns Returns the header componet, featuring a general back button.
 * @author Ameer G
 */
const Header = () => {
  return (
    <View style={frames.traverse_back}>
      <TouchableOpacity accessibilityLabel="Go back." onPress={traverseBack}>
        <Ionicons name="chevron-back" size={24} color={"#ffffff"}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};

/**
 * Creates the markup for the login protion of the sign-in page, featuring inputs, forgot password, login button, sepearte login, and more.
 * @returns returns the login portion of the sign-in page.
 */
const Login = () => {
  return (
    <View style={frames.outer_frame_login}>
      <View style={frames.logo_sign_in}>
        <Text style={aesthetics.text_sign_in}>OUT | LINE</Text>
      </View>
      <UserInput></UserInput>
      <TouchableOpacity style={aesthetics.btn_login}>
        <Text style={aesthetics.btn_login_text}>Login</Text>
      </TouchableOpacity>
      <Text style={aesthetics.alterante_sign_in}>Or sign in with</Text>
      <OtherLogin></OtherLogin>
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
      <TextInput
        style={inputs.user_input_fields}
        placeholder="Email or Username"
        placeholderTextColor={"#4b4b4b"}
      ></TextInput>
      <View style={frames.user_password_frame}>
        <TextInput
          style={inputs.user_input_fields}
          placeholder="Password"
          placeholderTextColor={"#4b4b4b"}
          secureTextEntry={true}
        ></TextInput>
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
 * Creates the alterate logins / sign-ups onto the screen.
 * @returns the markup for other-login options.
 * @author Ameer G
 */
const OtherLogin = () => {
  return (
    <View style={frames.other_platforms}>
      <TouchableOpacity
        style={aesthetics.btn_login_sepearte}
        onPress={platformSignIn}
      >
        <View style={frames.inner_other_platforms}>
          <Image
            source={require("../assets/google-icon-mutlicolored.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={aesthetics.btn_login_sepearte}
        onPress={platformSignIn}
      >
        <View style={frames.inner_other_platforms}>
          <Ionicons name="logo-apple" size={30} color={"white"}></Ionicons>
        </View>
      </TouchableOpacity>
    </View>
  );
};

/**
 * Creates the bottom text (already have an account, or need an account...).
 * TODO: make this component genric across multiple pages.
 * @returns a end of line text and button to push to a different page, based on the message rendered.
 */
const NeedOrHave = () => {
  return (
    <View style={aesthetics.new_to_outline}>
      <Text style={aesthetics.new_to_outline_text}>New to Outline?</Text>
      <TouchableOpacity
        onPress={handleSignUp}
        style={aesthetics.btn_sign_up_mini}
      >
        <Text style={aesthetics.new_sign_up}> Sign up.</Text>
      </TouchableOpacity>
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

  traverse_back: {
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
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

  other_platforms: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },

  inner_other_platforms: {
    padding: 10,
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
});

const inputs = StyleSheet.create({
  user_input_fields: {
    padding: 10,
    width: 320,
    height: 50,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#4b4b4b",
    borderWidth: 1,
  },
});

const aesthetics = StyleSheet.create({
  text_sign_in: {
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

  btn_login: {
    backgroundColor: "#8dac83",
    width: 320,
    height: 50,
    borderRadius: 10,
    borderColor: "#4b4b4b",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btn_login_text: {
    color: "#000000",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: 16,
  },

  alterante_sign_in: {
    textAlign: "center",
    fontSize: 16,
    color: "#ffffff",
  },

  btn_login_sepearte: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#4b4b4b",
  },

  btn_sign_up_mini: {
    color: "#8dac83",
    fontWeight: "bold",
  },

  new_to_outline: {
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "500",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  new_to_outline_text: {
    color: "#ffffff",
  },

  new_sign_up: {
    color: "#8dac83",
    fontWeight: "bold",
  },
});

// Export the sign-up-screen to other pages.
export default SignUpScreen;
