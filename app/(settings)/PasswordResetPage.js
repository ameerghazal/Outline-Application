import { Text, TextInput, View } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import globalStyles from "./globalStyles";
import SettingsInputBox from "../components/SettingsInputBox";

function PasswordResetPage() {
  return (
    <View style={globalStyles.container}>
      <BackBar></BackBar>
      <SettingsInputBox
        placeholder="Old Password"
        hidden={true}
      ></SettingsInputBox>
    </View>
  );
}

export default PasswordResetPage;
