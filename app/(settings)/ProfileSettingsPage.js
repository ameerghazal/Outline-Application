import { ScrollView } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import { useState } from "react";
import globalStyles from "./globalStyles";
import SettingsInputBox from "../components/SettingsInputBox";

function ProfileSettingsPage() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // console.log(phone);
  // console.log(email);
  // console.log(address);
  // console.log(campus);

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
    </ScrollView>
  );
}

export default ProfileSettingsPage;
