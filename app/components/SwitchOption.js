import React from "react";
import globalStyles from "../(settings)/globalStyles";

import { View, StyleSheet, Text, Switch } from "react-native";

function SwitchOption({ label, value, onValueChange, isBottomMargin, style }) {
  return (
    <View
      style={[
        styles.option,
        isBottomMargin && globalStyles.marginBottom,
        style,
      ]}
    >
      <Text style={globalStyles.text}>{label}</Text>
      <Switch
        trackColor={{ true: "#8dac83" }}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: "#4B4B4B",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SwitchOption;
