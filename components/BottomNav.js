import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const homeIcon = require("../assets/home-icon.png");
const searchIcon = require("../assets/search-icon.png");
const newPostIcon = require("../assets/new-post-icon.png");
const notisIcon = require("../assets/noti-icon.png");
const messagesIcon = require("../assets/message-icon.png");

function BottomNav() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: "#1B1B1B ",
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingBottom: insets.bottom + 15,
        borderTopWidth: 2,
        borderTopColor: "#4B4B4B",
      }}
    >
      <Text>Bottom Nav</Text>
    </View>
  );
}

export default BottomNav;
