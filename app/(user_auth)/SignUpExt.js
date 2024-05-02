import React, { useEffect, useState } from "react";
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
  handleLoginSmall,
  handleTerms,
  handleUserCreate,
} from "./Functions.js";
import { FIREBASE_AUTH } from "../../firebase.js";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Puts together the sign-up-screen based on the components we created below.
 * @returns the sign-up-screen.
 * @author Ameer G
 */
const SignUpScreenExt = () => {
  // Store the user data.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [incorrectFormat, setIncorrectForm] = useState(false);

  const formatPhoneNumber = (input) => {
    // Remove non-numeric characters
    const cleaned = ("" + input).replace(/\D/g, "");

    // Apply formatting
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return match[1] + "-" + match[2] + "-" + match[3];
    }

    return input;
  };

  // Check the data to ensure all fields are filled.
  async function handleUserCreate() {
    // Check if any of the fields are empty; if not, set them to lower case.
    console.log(
      firstName,
      lastName,
      username,
      birthdate,
      phoneNumber,
      incorrectFormat
    );
    if (
      firstName.length == 0 ||
      lastName.length == 0 ||
      username.length == 0 ||
      birthdate.length == 0 ||
      phoneNumber.length == 0
    ) {
      setIncorrectForm(true);
      return;
    }

    // Validate birthdate format (mm/dd/yyyy)
    if (!/^(\d{2})\/(\d{2})\/(\d{4})$/.test(birthdate)) {
      alert("Please enter a valid birthdate (mm/dd/yyyy).");
      return;
    }

    // Validate phone number input.
    if (phoneNumber.length !== 10) {
      alert("Please enter a valid phone number (xxx-xxx-xxxx).");
      return;
    }

    // Convert all the inputs to their respective types.
    setFirstName(firstName.toLowerCase());
    setLastName(lastName.toLowerCase());
    setUsername(username.toLowerCase());
    setBirthdate(birthdate);
    setPhoneNumber(phoneNumber);
    setIncorrectForm(false);

    // Grab current user.
    const user = FIREBASE_AUTH.currentUser;

    // Create the JSON object of the user data and push it to the database.
    const jsonUser = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      birthdate: birthdate,
      phoneNumber: phoneNumber,
      id: user.uid,
      email: user.email,
    };

    // Post the data.
    useEffect(() => {
      fetch(`http://localhost:80/pushUser?userID=${currUserID}`, {
        method: "POST",
        body: JSON.stringify(jsonUser),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data pushed successfully:", data);
        })
        .catch((error) => {
          console.error("Error pushing data:", error);
        });
    }, []);

    try {
      //TODO: Database call.
      const auth = FIREBASE_AUTH;
      router.push("HomeFeed");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <SafeAreaView style={frames.outer_frame}>
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
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          ></InputBox>
          <InputBox
            placeholder="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          ></InputBox>
          <InputBox
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          ></InputBox>
          <InputBox
            placeholder="Date of Birth"
            value={birthdate}
            onChangeText={(text) => setBirthdate(text)}
          ></InputBox>
          <InputBox
            placeholder="Phone Number"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          ></InputBox>
        </View>
        {incorrectFormat ? (
          <Text style={aesthetics.error_message}>
            All fields must be filled.
          </Text>
        ) : (
          ""
        )}
        <View style={frames.terms_and_polices}>
          <Text style={aesthetics.text_terms_and_polices}>
            By signing up, you agree to our
          </Text>
          <TouchableOpacity onPress={handleTerms}>
            <Text style={aesthetics.btn_text_terms_and_polices}>
              Terms and Privacy Policy.
            </Text>
          </TouchableOpacity>
        </View>
        <ButtonAuth
          buttonText={"Sign Up"}
          onPress={handleUserCreate}
        ></ButtonAuth>
      </View>
      <Redirection
        labelText={"Already have an account? "}
        buttonText={"Login."}
        onPress={handleLoginSmall}
      ></Redirection>
    </SafeAreaView>
  );
};

/**
 * Creates the markup for the sign up portion of the sign-up page.
 * @returns returns the portion of the sign-in page.
 * @author Ameer G
 */
const MiddleData = () => {
  return (
    <View style={frames.outer_frame_login}>
      <View style={frames.logo_sign_in}>
        <Text style={aesthetics.text_logo_auth}>OUT | LINE</Text>
      </View>
      <Text style={aesthetics.text_inspire_sign_up} numberOfLines={2}>
        Create an account and publish your daily outline to your friends.
      </Text>
      <UserInput></UserInput>
      <View style={frames.terms_and_polices}>
        <Text style={aesthetics.text_terms_and_polices}>
          By signing up, you agree to our
        </Text>
        <TouchableOpacity onPress={handleTerms}>
          <Text style={aesthetics.btn_text_terms_and_polices}>
            Terms and Privacy Policy.
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonAuth
        buttonText={"Sign Up"}
        onPress={handleUserCreate}
      ></ButtonAuth>
    </View>
  );
};

/**
 * Creates the user-sign-up logic.
 * @returns user input box, reused across sign-up pages.
 * @author Ameer Ghazal
 */
const UserInput = () => {
  return (
    <View style={frames.user_input_frame}>
      <InputBox placeholder="Full Name"></InputBox>
      <InputBox placeholder="Username"></InputBox>
      <InputBox placeholder="Date of Birth"></InputBox>
      <InputBox placeholder="Phone Number" number={true}></InputBox>
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

  terms_and_polices: {
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

  text_inspire_sign_up: {
    color: "#ffffff",
    fontWeight: "500",
    textAlign: "center",
    width: 270,
  },

  text_terms_and_polices: {
    textAlign: "center",
    fontSize: 14,
    color: "#ffffff",
  },

  btn_text_terms_and_polices: {
    color: "#8dac83",
  },

  error_message: {
    color: "red",
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
export default SignUpScreenExt;
