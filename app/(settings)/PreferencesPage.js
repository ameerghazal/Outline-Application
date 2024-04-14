import { Text, View } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import globalStyles from "./globalStyles";

function PreferencesPage() {
  return (
    <View style={globalStyles.container}>
      <BackBar></BackBar>
      <Text style={globalStyles.text}>PreferencesPage</Text>
    </View>
  );
}

export default PreferencesPage;
