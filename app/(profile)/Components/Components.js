import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { frames } from "../styles";

export const ProfileTabNavs = () => {
  return <Text style={frames.ProfileText}>TAB COMPONENTS </Text>;
};

export const ProfileTabContent = () => {
  return <Text style={frames.ProfileText}>TAB CONTENTS</Text>;
};
