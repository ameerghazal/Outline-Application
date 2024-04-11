import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

function BottomNav() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: "#1B1B1B ",
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderTopWidth: 2,
        borderTopColor: "#4B4B4B",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Link href="/">
        <Feather name="home" size={24} color="#FFFAFA" />
      </Link>

      <Link href="/search">
        <Feather name="search" size={24} color="#FFFAFA" />
      </Link>

      <Link href="/create">
        <Feather name="plus-square" size={24} color="#FFFAFA" />
      </Link>

      <Link href="/messages">
        <Feather name="message-square" size={24} color="#FFFAFA" />
      </Link>

      <Link href="/settings">
        <Feather name="bell" size={24} color="#FFFAFA" />
      </Link>
    </View>
  );
}

export default BottomNav;
