import { View, TextInput, StyleSheet, Text } from "react-native";
import globalStyles from "../(settings)/globalStyles";

function SettingsInputBox({ placeholder, hidden, ...props }) {
  return (
    <View>
      <Text style={globalStyles.text}>{placeholder}</Text>
      <TextInput
        secureTextEntry={hidden} // make input hidden based on hidden prop
        style={styles.input}
        placeholder={placeholder}
        // {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10, // Applies to all corners except bottom-right
    borderBottomLeftRadius: 0, // Specifically for bottom-right corner
    borderWidth: 1, // Width of the border
    borderColor: "#353B42", // Color of the border
    backgroundColor: "#4B4B4B",
    height: 48,
    padding: 10,
    marginVertical: 10,
    color: "#FFFAFA",
  },
});
export default SettingsInputBox;
