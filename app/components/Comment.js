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
import ToggleSVG from "./ToggleSVG";
import getTimeDifference from "./GetTimeDifference";
import { Link, router } from "expo-router";
import { ScrollView } from "react-native";
// Function to format the date and time.

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

const Comment = ({ comment, expanded = false }) => {
  // Store the database items and determine if the page is expanded page or not.
  const [items, setItems] = useState([]);
  const [userData, setUserData] = useState([]);

  // Database data.
  // useEffect(() => {
  //   fetch(`http://localhost:81/pullUserData?userID=${post.user_id}`)
  //     .then((response) => response.json())
  //     .then((data) => setUserData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // More fake data.
  const jsonData = {
    bio: null,
    follower_count: 0,
    following_count: 1,
    full_name: "Nirwaan Azhar",
    id: "TY9wzrcYJFTwJutARS7RXg1AeLB3",
    outline_count: 3,
    picture: null,
    username: "@dddd",
  };

  // Check if we use the fixed data or the database data.
  if (userData.length === 0) setUserData(() => jsonData);

  return (
    <View style={styles.postContainer}>
      <View style={styles.profileContainer}>
        {/* TODO: Make this clickable to the account. */}
        <View style={styles.postPicture}>
          <Image
            style={{ height: 45, width: 45 }}
            source={require("../../assets/goku-icon.png")}
          />
        </View>
        {/* TODO: Link to actual comments. */}

        <View style={styles.commentContent}>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "#FFFAFA" }}>{userData.full_name}</Text>
            <Text style={{ color: "#606060", marginLeft: 5 }}>
              {userData.username}
            </Text>
            <Text style={{ color: "#606060", marginLeft: 5 }}>•</Text>
            <Text style={{ color: "#606060", marginLeft: 5 }}>
              {getTimeDifference(comment.created_at)} ago
            </Text>
          </View>
          <Pressable
            onPress={() =>
              router.navigate({
                pathname: `${comment.id}`,
                params: {
                  type: "comment",
                  user_id: userData.id,
                },
              })
            }
          >
            <Text style={styles.input} numberOfLines={3}>
              {comment.body}
            </Text>
          </Pressable>
        </View>
      </View>
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
            <Text style={styles.postExpandedText}>
              {formatDate(comment.created_at)}
            </Text>
          </View>
        </View>
      ) : (
        ""
      )}
      <View style={styles.postFooter}>
        <TouchableOpacity activeOpacity={0.7}>
          <ToggleSVG
            el1={<Feather name="heart" size={18} color="#fffafa" />}
            el2={
              <FontAwesome name="heart" size={18} color="#8DAC83" bordercolor />
            }
            toggled={comment.is_liked}
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

const dew = StyleSheet.create({
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
  },
  postExpandedInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
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

const de = StyleSheet.create({
  postContainer: {
    padding: 10,
    backgroundColor: "#1B1B1B",
    // alignItems: "left",
    borderBottomColor: "#4B4B4B",
    borderBottomWidth: 1,
    flex: 1,
    overflow: "hidden",
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
    alignSelf: "flex-end",
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
    flexWrap: "wrap",
  },
  showMoreButton: {
    color: "#FFFAFA",
    borderBottomColor: "#FFFAFA",
    borderBottomWidth: 1,
    fontSize: 12,
  },

  // commentContent: {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "flex-start",
  // },
});

export default Comment;
