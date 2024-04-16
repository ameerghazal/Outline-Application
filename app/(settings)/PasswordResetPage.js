import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native"; // Import Button
import { BackBar } from "../(user_auth)/Components";

import globalStyles from "./globalStyles";
import SettingsInputBox from "../components/SettingsInputBox";

function PasswordResetPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  let verified = false;

  // Check if passwords match and each password is at least 8 characters long
  if (oldPassword === verifyPassword && oldPassword.length >= 8) {
    verified = true;
  }

  // Function to handle saving the new password
  const handleSavePassword = () => {
    if (newPassword.length >= 8) {
      console.log("New password saved:", newPassword); // You can replace this with your actual save logic
      // Possible further actions like showing a confirmation message or navigating away
    } else {
      alert("New password must be at least 8 characters long.");
    }
  };

  return (
    <View style={globalStyles.container}>
      <BackBar></BackBar>

      <SettingsInputBox
        placeholder="Old Password"
        hidden={true}
        onChangeText={setOldPassword}
      ></SettingsInputBox>

      <SettingsInputBox
        placeholder="Verify Password"
        hidden={true}
        onChangeText={setVerifyPassword}
      ></SettingsInputBox>

      {verified && (
        <>
          <SettingsInputBox
            placeholder="New Password"
            hidden={true}
            onChangeText={setNewPassword}
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
