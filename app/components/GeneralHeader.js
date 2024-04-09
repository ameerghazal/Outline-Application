import { Ionicons, Feather } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { traverseBack } from "../(home_feed)/Functions";
const GeneralHeader = () => {
  return (
    <View style={styles.header_container}>
      <TouchableOpacity accessibilityLabel="Go back." onPress={traverseBack}>
        <Ionicons name="chevron-back" size={24} color={"#ffffff"}></Ionicons>
      </TouchableOpacity>
      <Text style={styles.header_title}>OUT | LINE</Text>
      <Feather name="settings" size={24} color="#FFFAFA" />
    </View>
  );
};

const styles = StyleSheet.create({
  header_container: {
    color: "#1B1B1B",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  header_title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "white",
  },
});

export default GeneralHeader;
