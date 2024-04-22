import { Link, router } from "expo-router";
import {
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";
import { FIREBASE_AUTH } from "../../firebase.js";
import React, { useState, useEffect } from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

/**
 * Goes back to the previous page.
 * TODO: Implement and make genric.
 * @author Ameer G.
 */
export function traverseBack() {
  return router.back();
}

/**
 * Handles the terms and conditions button being pressed.
 * @author Ameer G.
 */
export function handleTerms() {}

/**
 * Handles the user login by moving them to the login page for the mini button.
 * @author Ameer G
 */
export function handleLoginSmall() {
  return router.push("SignIn");
}

/**
 * Handles the next state, when the user clicks the next button.
 * @author Ameer G
 */
export function handleNext() {
  return router.push("SignUpExt");
}

/**
 * Redirect the user to the forgot password page.
 * @author Ameer G
 */
export function handleForgotPassword() {
  return router.push("ResetPass");
}

/**
 * Handles the user sign-up by moving them to the sign up page.
 * Uses the built in react navigator.
 * @author Ameer G
 */
export function handleSignUpSmall() {
  return router.push("SignUp");
}

/**
 * Prompts the user with Google or Apple sign-up.
 * Async function that must run first.
 * @author Ameer G.
 */
export async function platformSignUp() {
  // Initalize google sign-up.
  GoogleSignin.configure({
    webClientId:
      "486928393801-n4sqbf4c3lcjsor85q4ovpftm9uvcpti.apps.googleusercontent.com",
    offlineAccess: true,
    forceCodeForRefreshToken: true,
  });

  try {
    // Await till the services are avaliable, then prompt the sign in.
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    return result;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log("Sign in cancelled");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log("Sign in in progress");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log("Play services not available");
    } else {
      // some other error happened
      console.error(error);
    }
  }
}

/**
 * Prompts the user with Google or Apple sign-in.
 * TODO: Implement and make it genric with sign-up.
 * @author Ameer G.
 */
export function platformSignIn() {}

/**
 * Handles the user login by sending data to firebase auth and prompts the screen to the main feed if correct; otheriwise, makes the box red.
 * @author Ameer G
 */
export function handleUserAuth() {}

/**
 * Handles the user create by sending data to firebase auth and prompts the screen to the main feed if correct; otheriwise, makes the box red.
 * @author Ameer G
 */
export function handleUserCreate() {}

/**
 * Send the reset password link, through firebase.
 * @author Aneer G
 */
export function handleSendLink() {}
