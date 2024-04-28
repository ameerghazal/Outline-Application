import { View, Text, Pressable } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { handleRoute } from "../functions/generalFunctions";
import { usePathname } from "expo-router";

function BottomNav() {
  const insets = useSafeAreaInsets();
  const currentPage = usePathname();

  const navigate = (path) => {
    if (currentPage !== `/${path}`) {
      router.push(path);
    }
  };

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
      <Pressable onPress={() => router.navigate("HomeFeed")}>
        <Feather
          name="home"
          size={24}
          color={currentPage === "/HomeFeed" ? "#8dac83" : "#FFFAFA"}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("Search")}>
        <Feather
          name="search"
          size={24}
          color={currentPage === "/SignUp" ? "#8dac83" : "#FFFAFA"}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("NewPost")}>
        <Feather
          name="plus-square"
          size={24}
          color={currentPage === "/Create" ? "#8dac83" : "#FFFAFA"}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("DMList")}>
        <Feather
          name="message-square"
          size={24}
          color={currentPage === "/Messages" ? "#8dac83" : "#FFFAFA"}
        />
      </Pressable>

      <Pressable onPress={() => router.navigate("Settings")}>
        <Feather
          name="bell"
          size={24}
          color={currentPage === "/Settings" ? "#8dac83" : "#FFFAFA"}
        />
    </View>
  );
}

export default BottomNav;
