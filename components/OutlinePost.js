import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const OutlinePost = ({ itemList }) => {
  const [items, setItems] = useState(itemList);

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/image.png")}
            style={styles.postPicture}
          />
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Entypo name="dots-three-horizontal" size={24} color="#fffafa" />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {items.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <TouchableOpacity activeOpacity={0.7}>
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                size={24}
                color="#fffafa"
              />
            </TouchableOpacity>
            <Text style={styles.input}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={styles.postFooter}>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="heart" size={24} color="#fffafa" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome5 name="comment-alt" size={24} color="#fffafa" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <EvilIcons name="share-google" size={36} color="#fffafa" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="bookmark" size={24} color="#fffafa" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 20,
    marginTop: 10,
    height: "35%",
    backgroundColor: "#1B1B1B",
    alignItems: "left",
  },
  postHeader: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  postFooter: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  postPicture: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  postIcon: {
    width: 25,
    height: 25,
  },
  listContainer: {
    alignItems: "left",
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 21,
    color: "#FFFAFA",
  },
});

export default OutlinePost;
