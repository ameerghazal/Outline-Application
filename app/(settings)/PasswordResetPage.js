import React, { useEffect, useState } from "react";
import { Text, TextInput, View, Button } from "react-native"; // Import Button
import { BackBar } from "../(user_auth)/Components";

import globalStyles from "./globalStyles";
import SettingsInputBox from "../components/SettingsInputBox";
import { FIREBASE_AUTH } from "../../firebase.js";
import { onAuthStateChanged, updatePassword } from "@firebase/auth";

function PasswordResetPage() {
  // Get the user data.
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  console.log(user);

  // Get the password data.
  const [oldPassword, setOldPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const auth = FIREBASE_AUTH;

  let verified = false;

  // Check if passwords match and each password is at least 8 characters long
  if (oldPassword === verifyPassword && oldPassword.length >= 8) {
    verified = true;
  }

  // Function to handle saving the new password
  async function handleSavePassword() {
    if (!user) {
      // User is not signed in
      alert("User not signed in");
      return;
    }

    if (oldPassword !== verifyPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    // Ensure the password contains a character, letter, and special character.
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      alert(
        "Password must contain at least one letter, one number, one special character, and be at least 8 characters long."
      );
      return;
    }

    // If we make it this far, reset the password.
    try {
      await user.reauthenticateWithCredential(
        FIREBASE_AUTH.EmailAuthProvider.credential(user.email, oldPassword)
      );
      const idToken = await user.getIdToken();
      // Use the idToken to update the password
      await updatePassword(idToken, newPassword);
      Alert.alert("Password updated successfully");
      setOldPassword("");
      setVerifyPassword("");
      setNewPassword("");
      router.push("ResetPass");
    } catch (error) {
      alert(
        "There is not an account with this combination of email and password."
      );
      console.log(error.message);
    }

    // if (newPassword.length >= 8) {
    //   console.log("New password saved:", newPassword); // You can replace this with your actual save logic
    //   // Possible further actions like showing a confirmation message or navigating away
    // } else {
    //   alert("New password must be at least 8 characters long.");
    // }
  }

  return (
    <View style={globalStyles.container}>
      <BackBar></BackBar>

      <SettingsInputBox
        placeholder="Old Password"
        hidden={true}
        onChangeText={setOldPassword}
        value={oldPassword}
      ></SettingsInputBox>

      <SettingsInputBox
        placeholder="Verify Password"
        hidden={true}
        onChangeText={setVerifyPassword}
        value={verifyPassword}
      ></SettingsInputBox>

      {verified && (
        <>
          <SettingsInputBox
            placeholder="New Password"
            hidden={true}
            onChangeText={setNewPassword}
            value={newPassword}
          ></SettingsInputBox>
          <Button title="Save New Password" onPress={handleSavePassword} />
        </>
      )}

      {!verified && oldPassword.length > 0 && verifyPassword.length > 0 && (
        <Text style={globalStyles.alertText}>
          Passwords must match and be at least 8 characters long.
        </Text>
      )}
    </View>
  );
}

export default PasswordResetPage;
