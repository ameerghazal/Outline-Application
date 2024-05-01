import React from "react";
import { Text, StyleSheet } from "react-native";

// Components of the function, can be stored inside or outside the file
const ExampleText = () => {
  return <Text style={frames.chucker}>This is an example screen</Text>;
};

const frames = StyleSheet.create({
  chucker: {
    color: "white",
  },
});

export default ExampleText;
