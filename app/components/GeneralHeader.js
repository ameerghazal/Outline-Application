import { Ionicons, Feather } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
const GeneralHeader = () => {
  <View style={styles.header_container}>
    <TouchableOpacity accessibilityLabel="Go back." onPress={router.back()}>
      <Ionicons name="chevron-back" size={24} color={"#ffffff"}></Ionicons>
    </TouchableOpacity>
    <Text style={styles.header_title}>OUT | LINE</Text>
    <Feather name="settings" size={24} color="#FFFAFA" />
  </View>;
};

const styles = StyleSheet.create({
  header_title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "white",
  },
});

export default GeneralHeader;
