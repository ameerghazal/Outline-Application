import { Text, View } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import globalStyles from "./globalStyles";

function NotificationsPage() {
  return (
    <View style={globalStyles.container}>
      <BackBar></BackBar>
      <Text style={globalStyles.text}>NotificationsPage</Text>
    </View>
  );
}

export default NotificationsPage;
