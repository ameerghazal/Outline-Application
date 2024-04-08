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

/**
 * Puts together the sign-in.-screen based on the components we created below.
 * @returns the sign-in-screen.
 * @author Ameer G
 */
const ExampleScreen = () => {
  return (
    <View style={frames.outer_frame}>
      <Text style={frames.chucker}>This is an example screen</Text>
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
    color: "white",
    flex: 1,
    gap: 100,
  },
  chucker: {
    color: "white",
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
export default ExampleScreen;
