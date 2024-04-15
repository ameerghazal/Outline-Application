import { Text, View } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import globalStyles from "./globalStyles";

function FaceIdAndPinPage() {
  return (
    <View style={globalStyles.container}>
      <BackBar></BackBar>
      <Text style={globalStyles.text}>FaceIdAndPinPage</Text>
    </View>
  );
}

export default FaceIdAndPinPage;
