import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Touchable,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import getTimeDifference from "./GetTimeDifference";
import { FIREBASE_AUTH } from "../../firebase";

const OutlinePostEditable = ({ userData, postData }) => {
  const [itemStates, setItemStates] = useState(postData.post_tasks_bodies);
  const [likeStatus, setLikeStatus] = useState(postData.is_liked); // For like button state

  const toggleCheckbox = (index) => {
    setItemStates((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        ...newState[index],
        is_checked: !newState[index].is_checked,
      }; // Invert the is_checked state
      return newState;
    });

    // Make a POST request to the Flask endpoint
    fetch("http://localhost:88/updateCheckbox", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...itemStates[index],
        is_checked: !itemStates[index].is_checked,
      }), // Send only the updated item
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Checkbox state updated successfully:", data);
        // Handle successful response
      })
      .catch((error) => {
        console.error("Error updating checkbox state:", error);
        // Handle error
      });
  };

  // Function to toggle like button state
  const toggleLike = () => {
    setLikeStatus(!likeStatus);
    const currUserID = FIREBASE_AUTH.currentUser.uid;

    // Combine post data and currUserID into an object
    const postDataWithUserID = {
      ...postData, // Assuming post is already defined
      curr_user_id: currUserID,
    };

    // Send a POST request to update the like status in the database
    fetch("http://localhost:90/updatePostLike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDataWithUserID), // Stringify the combined object
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Post like updated successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating post like:", error);
      });
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.profileContainer}>
          <View style={styles.postPicture}>
            <Image
              style={{ height: 45, width: 45 }}
              source={require("../../assets/goku-icon.png")}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "#FFFAFA" }}>{userData.full_name}</Text>
            <Text style={{ color: "#606060", marginLeft: 5 }}>
              {userData.username}
            </Text>
            <Text style={{ color: "#606060", marginLeft: 5 }}>•</Text>
            <Text style={{ color: "#606060", marginLeft: 5 }}>
              {getTimeDifference(postData.created_at)} ago
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        {postData.post_tasks_bodies.slice(0, 2).map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Pressable onPress={() => toggleCheckbox(index)}>
              {/* Render checkbox based on isChecked state */}
              <MaterialCommunityIcons
                name={
                  itemStates[index].is_checked
                    ? "checkbox-marked-outline"
                    : "checkbox-blank-outline"
                }
                size={24}
                color={itemStates[index].is_checked ? "#8DAC83" : "#fffafa"}
              />
            </Pressable>
            <Text style={styles.input}>{item.body}</Text>
          </View>
        ))}
        {postData.post_tasks_bodies.length > 2 && (
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
        <Pressable onPress={toggleLike}>
          {/* Render like button based on likeStatus state */}
          {likeStatus ? (
            <FontAwesome name="heart" size={18} color="#8DAC83" />
          ) : (
            <Feather name="heart" size={18} color="#fffafa" />
          )}
        </Pressable>
        <Pressable activeOpacity={0.7}>
          <FontAwesome5 name="comment-alt" size={18} color="#fffafa" />
        </Pressable>
        <Pressable activeOpacity={0.7}>
          <EvilIcons name="share-google" size={30} color="#fffafa" />
        </Pressable>
        <Pressable activeOpacity={0.7}>
          <Feather name="bookmark" size={18} color="#fffafa" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
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
    borderRadius: 50,
    alignItems: "center",
    overflow: "hidden",
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

export default OutlinePostEditable;
