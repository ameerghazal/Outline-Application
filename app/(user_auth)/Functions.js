import { Link, router } from "expo-router";

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
 * TODO: Implement and make it genric with sign-in.
 * @author Ameer G.
 */
export function platformSignUp() {}

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
