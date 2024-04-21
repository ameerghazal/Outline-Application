import { View, Text, Pressable } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";

function BottomNav() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: "#1B1B1B",
        width: "100%",
        borderTopWidth: 2,
        borderTopColor: "#4B4B4B",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 40,
        paddingTop: 20,
      }}
    >
      <Pressable onPress={() => router.push("HomeFeed")}>
        <Feather name="home" size={24} color="#FFFAFA" />
      </Pressable>

      <Pressable onPress={() => router.push("SignUpExt")}>
        <Feather name="search" size={24} color="#FFFAFA" />
      </Pressable>

      <Pressable href="/create">
        <Feather name="plus-square" size={24} color="#FFFAFA" />
      </Pressable>

      <Pressable href="/messages">
        <Feather name="message-square" size={24} color="#FFFAFA" />
      </Pressable>

      <Pressable href="/settings">
        <Feather name="bell" size={24} color="#FFFAFA" />
      </Pressable>
    </View>
  );
}

export default BottomNav;
