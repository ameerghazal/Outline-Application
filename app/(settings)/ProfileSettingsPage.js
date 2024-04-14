import { View, Text } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import globalStyles from "./globalStyles";
import SettingsInputBox from "../components/SettingsInputBox";
import { useState } from "react";

function ProfileSettingsPage() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [campus, setCampus] = useState("");

  return (
    <View style={globalStyles.container}>
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
        onChangeText={setAddress}
        placeholder="Address"
      ></SettingsInputBox>
      <SettingsInputBox
        onChangeText={setCampus}
        placeholder="Campus"
      ></SettingsInputBox>
    </View>
  );
}

export default ProfileSettingsPage;
