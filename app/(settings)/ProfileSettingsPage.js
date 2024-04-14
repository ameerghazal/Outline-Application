import { View, Text } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import globalStyles from "./globalStyles";
import SettingsInputBox from "../components/SettingsInputBox";

function ProfileSettingsPage() {
  return (
    <View style={globalStyles.container}>
      <BackBar></BackBar>
      <SettingsInputBox placeholder="Phone"></SettingsInputBox>
      <SettingsInputBox placeholder="Email Address"></SettingsInputBox>
      <SettingsInputBox placeholder="Address"></SettingsInputBox>
      <SettingsInputBox placeholder="Campus"></SettingsInputBox>
    </View>
  );
}

export default ProfileSettingsPage;
