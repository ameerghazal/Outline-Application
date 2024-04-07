import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import { Link, router } from "expo-router";
import { traverseBack } from "./Functions";

/**
 * Handles the phone-number OR date formatting, for input boxes.
 *
 */
function handleInputFormat() {
  // Store the format of the number.
  const phoneRegex = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  const [phoneNumber, setPhoneNumber] = useState("");
}

/**
 * General header component for multiple pages.
 * Features a general back cheveron button,
 * @param {*} onPress functionality of the bar.
 * @returns Returns the header componet, featuring a general back button.
 * @author Ameer G
 */
export function BackBar() {
  return (
    <View style={frames.traverse_back}>
      <TouchableOpacity accessibilityLabel="Go back." onPress={traverseBack}>
        <Ionicons name="chevron-back" size={24} color={"#ffffff"}></Ionicons>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Creates the user-input genric input box.
 * @param {*} placeholder used for the place-holder text of the input box.
 * @param {*} secureTextEntry default is false, but change to true is the input is a password.
 * @returns user input box, reused across sign-up pages.
 * @author Ameer Ghazal
 */
export function InputBox({
  placeholder,
  secureTextEntry = false,
  number = false,
}) {
  // If phone number is true, format the input box.
  if (number) {
    // Store the format of the number.
    const phoneRegex = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    const [phoneNumber, setPhoneNumber] = useState("");

    const handlePhoneNumberChange = (input) => {
      if (phoneRegex.test(input)) {
        setPhoneNumber(input);
      }
    };

    return (
      <TextInput
        style={inputs.user_input_fields}
        placeholder={placeholder}
        placeholderTextColor={"#4b4b4b"}
        value={number}
        onChangeText={handlePhoneNumberChange}
        keyboardType="phone-pad"
      />
    );
  }

  return (
    <TextInput
      style={inputs.user_input_fields}
      placeholder={placeholder}
      placeholderTextColor={"#4b4b4b"}
      secureTextEntry={secureTextEntry}
    ></TextInput>
  );
}

/**
 * Creates the alterate logins / sign-ups onto the screen.
 * @param {*} onPress function to deal with the alternate authentication.
 * @returns the markup for other-login options.
 * @author Ameer G
 */
export function AlternateAuth({ onPress }) {
  return (
    <View style={frames.other_platforms}>
      <TouchableOpacity style={aesthetics.btn_login_sepearte} onPress={onPress}>
        <View style={frames.inner_other_platforms}>
          <Image
            source={require("../../assets/google-icon-mutlicolored.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={aesthetics.btn_login_sepearte} onPress={onPress}>
        <View style={frames.inner_other_platforms}>
          <Ionicons name="logo-apple" size={30} color={"white"}></Ionicons>
        </View>
      </TouchableOpacity>
    </View>
  );
}

/**
 * Creates and styles the custom button.
 * @param {*} buttonText the button text of the specific button.
 * @returns returns a generic button.
 * @author Ameer G
 */
export function ButtonAuth({ buttonText, onPress }) {
  return (
    <TouchableOpacity style={aesthetics.btn_login} onPress={onPress}>
      <Text style={aesthetics.btn_login_text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

/**
 * Creates the bottom text with a button.
 * @param {*} labelText the label text of the message.
 * @param {*} buttonText the button text of the specific button.
 * @param {*} onPress functionality when the button is pressed.
 * @returns a end of line text and button to push to a different page, based on the message rendered.
 * @author Ameer G
 */
export function Redirection({ labelText, buttonText, onPress }) {
  return (
    <View style={aesthetics.new_to_outline}>
      <Text style={aesthetics.new_to_outline_text}>{labelText}</Text>
      <TouchableOpacity onPress={onPress} style={aesthetics.btn_sign_up_mini}>
        <Text style={aesthetics.new_sign_up}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

// export default { InputBox, AlternateAuth, ButtonAuth, Redirection };

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
