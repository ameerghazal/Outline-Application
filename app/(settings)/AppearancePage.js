import { Text, View, StyleSheet } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import globalStyles from "./globalStyles";

const styles = StyleSheet.create({});

function AppearancePage() {
  return (
    <View style={globalStyles.container}>
      <BackBar></BackBar>
      <Text style={globalStyles.text}>AppearancePage</Text>
    </View>
  );
}

export default AppearancePage;
