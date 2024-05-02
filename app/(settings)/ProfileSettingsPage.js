import { ScrollView } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import { useState } from "react";
import globalStyles from "./globalStyles";
import SettingsInputBox from "../components/SettingsInputBox";
import { FIREBASE_AUTH } from "../../firebase.js";
import { updateEmail } from "@firebase/auth";
import { Button } from "react-native-elements";
import { useEffect } from "react";
import { IP } from "../(home_feed)/HomeFeed.js";

function ProfileSettingsPage() {

  // Grab the current user.
  const auth = FIREBASE_AUTH.currentUser;
  const user_id = auth.uid;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Pull in the user data and fill the fields.
  useEffect(() => {
    fetch(`http://${IP}:500/pullUserData?userID=${user_id}`)
      .then((response) => response.json())
      .then((data) => {
          setEmail(auth.email);
          setFirstName(data.full_name.split(" ")[0])
          setLastName(data.full_name.split(" ")[1])
            // Init the fields.
    })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

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
      id: user.uid,
      email: user.email,
    };

    // Convert all the inputs to their respective types.
    setFirstName(firstName.toLowerCase());
    setLastName(lastName.toLowerCase());

    // If we make it this far, update the email for the database.
    try {
      await updateEmail(user, email);
      // Post the data.
      useEffect(() => {
        fetch(`http://${IP}:500/updateUser?userID=${auth}`, {
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
            console.log("Data updated successfully:", data);
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
        onChangeText={setEmail}
        value={email}
        placeholder="Email Address"
      ></SettingsInputBox>
      <SettingsInputBox
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      ></SettingsInputBox>
      <SettingsInputBox
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      ></SettingsInputBox>
      <Button title="Save fields" onPress={handleSaveChanges} />
    </ScrollView>
  );
}

export default ProfileSettingsPage;