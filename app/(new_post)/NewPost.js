import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import Constants from "expo-constants";
import AppButton from "../components/AppButton";
import OutlineEditList from "../components/OutlineEditList";
import { traverseBack } from "./Functions";

export default function NewPost() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <AppButton
          title="Cancel"
          size="sm"
          color="#FFFAFA"
          backgroundColor="transparent"
          onPress={traverseBack}
        ></AppButton>
        <Text style={styles.header_text}>NEW POST</Text>
        <AppButton
          title="Post"
          size="sm"
          backgroundColor="#8DAC83"
          color="FFFAFA"
        ></AppButton>
      </View>
      <KeyboardAvoidingView style={styles.post}>
        <OutlineEditList />
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
    backgroundColor: "#1B1B1B",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: -10,
    marginTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 0.25,
    borderBottomColor: "#656060",
    borderBottomEndRadius: 1,
  },
  header_text: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#8DAC83",
  },
  post: {
    alignItems: "left",
  },
});
