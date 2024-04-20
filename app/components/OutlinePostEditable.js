import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Touchable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ToggleSVG from "./ToggleSVG";

const OutlinePost = ({ itemList }) => {
  const [items, setItems] = useState(itemList);

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.profileContainer}>
          <View style={styles.postPicture}>
            <Image
              style={{ height: 45, width: 45 }}
              source={require("../../assets/rintwit.jpg")}
            />
          </View>
          <Text style={{ color: "#FFFAFA", marginLeft: 10, fontSize: 12 }}>
            @NerdWaan
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Entypo name="dots-three-horizontal" size={18} color="#fffafa" />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {items.slice(0, 2).map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <ToggleSVG
              el1={
                <MaterialCommunityIcons
                  name={"checkbox-blank-outline"}
                  size={24}
                  color="#fffafa"
                />
              }
              el2={
                <MaterialCommunityIcons
                  name={"checkbox-marked-outline"}
                  size={24}
                  color="#fffafa"
                />
              }
            ></ToggleSVG>
            <Text style={styles.input}>{item}</Text>
          </View>
        ))}
        {items.length > 2 && (
          <TouchableOpacity
            style={{
              flex: 1,
              width: 46,
              flexDirection: "row",
            }}
          >
            <Text style={styles.showMoreButton}>Show all</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.postFooter}>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="heart" size={18} color="#fffafa" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome5 name="comment-alt" size={18} color="#fffafa" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <EvilIcons name="share-google" size={30} color="#fffafa" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="bookmark" size={18} color="#fffafa" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    height: "35%",
    backgroundColor: "#1B1B1B",
    alignItems: "left",
    borderBottomColor: "#4B4B4B",
    borderBottomWidth: 1,
  },
  postHeader: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  postFooter: {
    paddingHorizontal: 15,
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
    borderRadius: "50%",
    alignItems: "center",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  listContainer: {
    alignItems: "left",
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "#FFFAFA",
  },
  showMoreButton: {
    color: "#FFFAFA",
    borderBottomColor: "#FFFAFA",
    borderBottomWidth: 1,
    fontSize: 12,
  },
});

export default OutlinePost;
