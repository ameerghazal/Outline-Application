import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ToggleSVG from "./ToggleSVG";
import getTimeDifference from "./GetTimeDifference";
import { Link, router } from "expo-router";
import { FIREBASE_AUTH } from "../../firebase";
// Function to format the date and time.

const IP = "10.204.255.142";
function formatDate(inputDateStr) {
  const moment = require("moment-timezone");

  // Parse the input date string in GMT timezone
  var inputDate = moment.tz(inputDateStr, "GMT");

  // Format the time part
  var timeStr = inputDate.format("h:mma");

  // Format the date part
  var dateStr = inputDate.format("M/D/YYYY");

  return timeStr + " - " + dateStr;
}

const OutlinePost = ({ post, expanded = false }) => {
  // Store the database items and determine if the page is expanded page or not.
  console.log(post.picture);
  const [itemsStates, setItemsStates] = useState(post.post_tasks_bodies);
  const [userData, setUserData] = useState([]);
  const [likeStatus, setLikeStatus] = useState(post.is_liked); // For like button state
  let renderedItems, date, userPost;

  // If expanded, don't slice and format the date.
  if (!expanded) {
    renderedItems = itemsStates.slice(0, 2);
  } else {
    renderedItems = itemsStates;
    date = formatDate(post.created_at);
  }
  // Database data, pull the specific user.  const [likeStatus, setLikeStatus] = useState(isLiked); // For like button state

  useEffect(() => {
    fetch(`http://${IP}:500/pullUserData?userID=${post.user_id}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Determine if the post passed in is the current user's post.
  if (FIREBASE_AUTH.currentUser.uid == post.user_id) {
    userPost = true;
  } else {
    userPost = false;
  }

  // Function to toggle like button state
  const toggleLike = () => {
    setLikeStatus(!likeStatus);
    const currUserID = FIREBASE_AUTH.currentUser.uid;

    // Combine post data and currUserID into an object
    const postDataWithUserID = {
      ...post, // Assuming post is already defined
      curr_user_id: currUserID,
    };

    // Send a POST request to update the like status in the database
    fetch(`http://${IP}:500/updatePostLike`, {
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

  // toggle checkbox in db
  const toggleCheckbox = (index) => {
    setItemsStates((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        ...newState[index],
        is_checked: !newState[index].is_checked,
      }; // Invert the is_checked state
      return newState;
    });

    // Make a POST request to the Flask endpoint
    fetch(`http://${IP}:500/updateCheckbox`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...itemsStates[index],
        is_checked: !itemsStates[index].is_checked,
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

    // Return the view.
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Pressable
            onPress={() =>
              router.navigate({
                pathname: "Profile",
                params: {
                  user_id: userData.id,
                },
              })
            }
          >
            <View style={styles.profileContainer}>
              <View style={styles.postPicture}>
                <Image
                  style={{ height: 45, width: 45 }}
                  source={require("../../assets/generic.png")}
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
                  {getTimeDifference(post.created_at)} ago
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
        <Pressable
          onPress={() =>
            router.navigate({
              pathname: `${post.id}`,
              params: {
                type: "outline",
                user_id: userData.id,
              },
            })
          }
        >
          <View style={styles.listContainer}>
            {renderedItems.map((task, index) => (
              <View style={styles.itemContainer
            } key={index}>
                {userPost ? (
                  <Pressable onPress={() => toggleCheckbox(index)}>
                    <MaterialCommunityIcons
                      name={
                        itemsStates[index].is_checked
                          ? "checkbox-marked-outline"
                          : "checkbox-blank-outline"
                      }
                      size={24}
                      color={itemsStates[index].is_checked ? "#8DAC83" : "#fffafa"}
                    />
                  </Pressable>
                ) : task.is_checked ? (
                  <MaterialCommunityIcons
                    name="checkbox-marked-outline"
                    size={24}
                    color="#8DAC83"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    size={24}
                    color="#fffafa"
                  />
                )}
                <Text style={styles.input}>{task.body}</Text>
              </View>
            ))}
          </View>
        </Pressable>
  
        {/* TODO: ADD DATABASE FIELDS FOR # OF LIKES, COMMENTS. */}
        {expanded ? (
          <View style={styles.postExpanded}>
            <View style={styles.postExpandedInner}>
              <Text style={styles.postExpandedText}>
                4,123
                <Text style={{ color: "#4b4b4b" }}> motivations</Text>
              </Text>
              <Text style={styles.postExpandedText}>
                2983
                <Text style={{ color: "#4b4b4b" }}> feedbacks</Text>
              </Text>
            </View>
            <View style={styles.postExpandedDate}>
              <Text style={styles.postExpandedText}>{date}</Text>
            </View>
          </View>
        ) : (
          ""
        )}
        <View style={styles.postFooter}>
          <Pressable activeOpacity={0.7} onPress={toggleLike}>
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
  postExpanded: {
    padding: 10,
    width: "100%",
  },
  postExpandedInner: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  postExpandedText: {
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    fontSize: 12,
    textAlign: "right",
  },
  postExpandedDate: {
    display: "flex",
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
    alignSelf: "flex-end",
    width: 400
  },
  input: {
    flex: 1,
    padding: 10,
    width: "100%",
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
