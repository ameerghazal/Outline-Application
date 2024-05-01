import React, { useState } from "react";
import { View, Button } from "react-native"; // Import Button
import { BackBar } from "../(user_auth)/Components";
import globalStyles from "./globalStyles";
import SettingsInputBox from "../components/SettingsInputBox";
import { FIREBASE_AUTH } from "../../firebase.js";
import { updatePassword } from "@firebase/auth";

function PasswordResetPage() {
  // If we make it here, then the user has already signed in and confirmed their authentication.

  // Get the new password data.
  const [newPassword, setNewPassword] = useState("");
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;

  // Function to handle saving the new password
  async function handleSavePassword() {
    // User is not signed in.
    if (!user) {
      alert("User not signed in");
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
      await updatePassword(user, newPassword);
      alert("Password updated successfully");
      setNewPassword("");
    } catch (error) {
      alert(
        "There is not an account with this combination of email and password."
      );
      console.log(error.message);
    }
  }

  return (
    <View style={globalStyles.container}>
      <BackBar></BackBar>
      <SettingsInputBox
        placeholder="New Password"
        hidden={true}
        onChangeText={setNewPassword}
        value={newPassword}
      ></SettingsInputBox>
      <Button title="Save New Password" onPress={handleSavePassword} />
    </View>
  );
}

export default PasswordResetPage;

// OLD NAWAZ CODE:
// return (
//   <View style={globalStyles.container}>
//     <BackBar></BackBar>

//     <SettingsInputBox
//       placeholder="Old Password"
//       hidden={true}
//       onChangeText={setOldPassword}
//       value={oldPassword}
//     ></SettingsInputBox>

//     <SettingsInputBox
//       placeholder="Verify Password"
//       hidden={true}
//       onChangeText={setVerifyPassword}
//       value={verifyPassword}
//     ></SettingsInputBox>

//     {verified && (
//       <>
//         <SettingsInputBox
//           placeholder="New Password"
//           hidden={true}
//           onChangeText={setNewPassword}
//           value={newPassword}
//         ></SettingsInputBox>
//         <Button title="Save New Password" onPress={handleSavePassword} />
//       </>
//     )}

//     {!verified && oldPassword.length > 0 && verifyPassword.length > 0 && (
//       <Text style={globalStyles.alertText}>
//         Passwords must match and be at least 8 characters long.
//       </Text>
//     )}
//   </View>
// );
