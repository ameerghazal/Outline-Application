import { ScrollView } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import { useState } from "react";
import globalStyles from "./globalStyles";
import SettingsInputBox from "../components/SettingsInputBox";
import { FIREBASE_AUTH } from "../../firebase.js";
import { updateEmail } from "@firebase/auth";

function ProfileSettingsPage() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Grab the current user.
  const auth = FIREBASE_AUTH.currentUser;
  const user = auth.uid;

  // Function to handle saving the new password
  async function handleSaveChanges() {
    // User is not signed in.
    if (!user) {
      alert("User not signed in");
      return;
    }

    // Check the email "@".
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone number.
    if (phone.length !== 10) {
      alert("Please enter a valid phone number (xxx-xxx-xxxx).");
      return;
    }

    // Create the JSON object of the user data and push it to the database.
    const jsonUser = {
      first_name: firstName,
      last_name: lastName,
      phoneNumber: phoneNumber,
      id: user.uid,
      email: user.email,
    };

    // Convert all the inputs to their respective types.
    setFirstName(firstName.toLowerCase());
    setLastName(lastName.toLowerCase());
    setPhoneNumber(phoneNumber);

    // If we make it this far, update the email for the database.
    try {
      await updateEmail(user, email);
      // Post the data.
      useEffect(() => {
        fetch(`http://localhost:80/pushUser?userID=${auth}`, {
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
      alert("Fields updated.");
    } catch (error) {
      alert(
        "There is not an account with this combination of email and password."
      );
      console.log(error.message);
    }
  }

  return (
    <ScrollView style={globalStyles.container}>
      <BackBar></BackBar>
      <SettingsInputBox
        onChangeText={setPhone}
        placeholder="Phone"
      ></SettingsInputBox>
      <SettingsInputBox
        onChangeText={setEmail}
        placeholder="Email Address"
      ></SettingsInputBox>
      <SettingsInputBox
        onChangeText={setFirstName}
        placeholder="First Name"
      ></SettingsInputBox>
      <SettingsInputBox
        onChangeText={setLastName}
        placeholder="Last Name"
      ></SettingsInputBox>
      <Button title="Save fields" onPress={handleSaveChanges} />
    </ScrollView>
  );
}

export default ProfileSettingsPage;
