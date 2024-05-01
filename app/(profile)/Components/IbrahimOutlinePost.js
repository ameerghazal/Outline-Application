import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ToggleSVG from "../../components/ToggleSVG";

const IbrahimOutlinePost = ({ itemList, userData }) => {
  const [items, setItems] = useState(itemList);
  const [isLiked] = useState(false);
  const [isChecked] = useState(false);

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.profileContainer}>
          <View style={styles.postPicture}>
            <Image style={styles.postPfp} source={userData.imageURL} />
          </View>
          <View style={styles.postUserNameContainer}>
            <Text style={styles.postDisplayName}>{userData.displayName}</Text>
            <Text style={styles.postNameTime}>@{userData.displayHandle}</Text>
            <Text style={styles.postNameTime}>•</Text>
            <Text style={styles.postNameTime}>{userData.postTime}</Text>
          </View>
        </View>
      </View>

      <View style={styles.listContainer}>
        {items.slice(0, 2).map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <MaterialCommunityIcons
              name={"checkbox-blank-outline"}
              size={24}
              color="#fffafa"
            />
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
          <ToggleSVG
            el1={<Feather name="heart" size={18} color="#fffafa" />}
            el2={
              <FontAwesome name="heart" size={18} color="#8DAC83" bordercolor />
            }
            toggled={isLiked}
          ></ToggleSVG>
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

const PostItem = (key, item) => {
  return (
    <View style={styles.itemContainer} key={key}>
      <MaterialCommunityIcons
        name={"checkbox-blank-outline"}
        size={24}
        color="#fffafa"
      />
      <Text style={styles.input}>{item}</Text>
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
  postPfp: { height: 45, width: 45 },
  listContainer: {
    alignItems: "left",
    padding: 10,
  },
  postUserNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  postDisplayName: { color: "#FFFAFA" },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  postNameTime: { color: "#606060", marginLeft: 5 },
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

export default IbrahimOutlinePost;
