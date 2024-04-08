import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ExampleScreen = () => {
  return (
    <View style={frames.outer_frame}>
      <Text style={frames.chucker}>This is an example screen</Text>
    </View>
  );
};

const frames = StyleSheet.create({
  outer_frame: {
    backgroundColor: "#1B1B1B",
    flex: 1,
  },
  chucker: {
    color: "white",
  },
});

// Export the sign-up-screen to other pages.
export default ExampleScreen;
