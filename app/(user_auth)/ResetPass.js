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
import { handleLoginSmall, handleSendLink, handleTerms } from "./Functions.js";
import { FIREBASE_AUTH } from "../../firebase.js";
import {
  sendPasswordResetEmail,
  confirmPasswordReset,
  sendEmailVerification,
} from "firebase/auth";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Puts together the sign-up-screen based on the components we created below.
 * @returns the sign-up-screen.
 * @author Ameer G
 */
const ResetPasswordScreen = () => {
  // Store the email and the sent status button.
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [resetCode, setResetCode] = useState("");
  const [passwordReset, setPasswordReset] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  // Timer effect for allowing the button to be used.
  useEffect(() => {
    let timer;
    if (emailSent && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prevCount) => prevCount - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      clearInterval(timer);
      setEmailSent(false);
    }
    return () => clearInterval(timer);
  }, [emailSent, resendTimer]);

  // Handle sending the user a link.
  async function handleSendLink() {
    // Check if the email contains an "@".
    console.log(email);
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // If we make it here, login to the account.
    try {
      const auth = FIREBASE_AUTH;
      await sendPasswordResetEmail(auth, email);
      setResendTimer(30); // set the resend timer.
      setEmailSent(true); // set to true.
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
        <Text style={aesthetics.text_inspire_sign_up} numberOfLines={3}>
          Enter the email address linked with your account, and we will reach
          out to you.
        </Text>
        <View style={frames.user_input_frame}>
          <InputBox
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></InputBox>
        </View>
        <View style={frames.terms_and_polices}>
          <Text style={aesthetics.text_terms_and_polices}>
            Can't reset your
          </Text>
          <TouchableOpacity onPress={handleTerms}>
            <Text style={aesthetics.btn_text_terms_and_polices}>
              {" password?"}
            </Text>
          </TouchableOpacity>
        </View>
        <ButtonAuth
          buttonText={"Send link"}
          onPress={handleSendLink}
          disabled={emailSent}
        ></ButtonAuth>
      </View>
      {emailSent ? (
        <Text style={aesthetics.text_countdown}>
          Email sent. Didn't receive?{" "}
          <Text style={aesthetics.text_countdown_timer}>
            Resend in {resendTimer}s.
          </Text>
        </Text>
      ) : (
        ""
      )}
      <Redirection
        labelText={"Back to "}
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
const MiddleData = () => {
  return (
    <View style={frames.outer_frame_login}>
      <View style={frames.logo_sign_in}>
        <Text style={aesthetics.text_logo_auth}>OUT | LINE</Text>
      </View>
      <Text style={aesthetics.text_inspire_sign_up} numberOfLines={3}>
        Enter the email address linked with your account, and we will reach out
        to you.
      </Text>
      <UserInput></UserInput>
      <View style={frames.terms_and_polices}>
        <Text style={aesthetics.text_terms_and_polices}>Can't reset your </Text>
        <TouchableOpacity onPress={handleTerms}>
          <Text style={aesthetics.btn_text_terms_and_polices}>password?</Text>
        </TouchableOpacity>
      </View>
      <ButtonAuth
        buttonText={"Send link"}
        onPress={handleSendLink}
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
      <InputBox placeholder="Email Address"></InputBox>
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
    fontFamily: "Montserrat",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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

  text_countdown: {
    textAlign: "center",
    color: "#ffffff",
    width: 220,
    alignSelf: "center",
  },

  text_countdown_timer: {
    color: "#8dac83",
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
export default ResetPasswordScreen;
