import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import OutlinePost from "../../components/OutlinePost";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { outlines } from "../HomeFeed";
import { traverseBack } from "../../functions/generalFunctions";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useState } from "react";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Comment from "../../components/Comment";

export const commentTester = {
  1: {
    id: 1000,
    body: "Lorem ienfoiwenio0wedoiwemndopim iodmokqmdopiqm",
    created_at: "Mon, 22 Apr 2024 10:30:00 GMT",
    is_liked: true,
    user_id: 2,
  },
  2: {
    id: 223,
    body: "Facts bro.",
    created_at: "Mon, 22 Apr 2024 10:30:00 GMT",
    is_liked: true,
    user_id: 1,
  },
  3: {
    id: 24,
    body: "Lebron Jams, Lakers in 7!",
    created_at: "Mon, 22 Apr 2024 10:30:00 GMT",
    is_liked: true,
    user_id: 3,
  },
  4: {
    id: 12,
    body: "Lebron Jams, Lakers in 7!",
    created_at: "Mon, 22 Apr 2024 10:30:00 GMT",
    is_liked: true,
    user_id: 3,
  },
  5: {
    id: 3333,
    body: "Lebron Jams, Lakers in 7!",
    created_at: "Mon, 22 Apr 2024 10:30:00 GMT",
    is_liked: true,
    user_id: 3,
  },
};

// Find the object index, given a specific id.
function findByID(id, data) {
  for (const key in data) {
    if (data[key].id == id) {
      return data[key];
    }
  }
  return null;
}

/**
 * Navigation function, where it navigates to the function based on the type passed in.
 * @author Ameer Ghazal
 */
export default function Screen() {
  // Grab the parameters.
  const { id, type, user_id } = useGlobalSearchParams();

  // Render the screen based on the type.
  if (type == "outline") {
    return OutlineScreen(id);
  } else if (type == "comment") {
    return CommentScreen(id);
  }

  return ProfileScreen(user_id);
}

/**
 * Exports the specific outline when clicked by a user.
 * @author Ameer Ghazal
 */
const OutlineScreen = (id) => {
  // Get the outline based on the specific id [REPLACE OUTLINES W/ DATABASE CALL FOR THE OUTLINES].
  const data = findByID(id, outlines);
  console.log(data);

  // If undefined, render an error.
  if (!data) {
    return <Text>An error has occured!</Text>;
  }

  // Grab the comments [REPLACE COMMENTTESTER W/ DATABASE CALL FOR COMMENTS].
  const [commentData, setCommentData] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:80/pullPostsFollowing?userID=${currUserID}`)
  //     .then((response) => response.json())
  //     .then((data) => setPostData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  // console.log(postData);
  if (commentData.length === 0) setCommentData(() => commentTester);

  // Return the page featuring the specific outline.
  return (
    <View style={{ flex: 1, backgroundColor: "#1b1b1b", padding: 10 }}>
      <SafeAreaView style={frames.outer_frame}>
        <View style={frames.header}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={"#ffffff"}
            onPress={traverseBack}
            style={aesthetics.icon}
          ></Ionicons>
          <Text style={aesthetics.middleHeader}>Post</Text>
          <View></View>
        </View>
        <ScrollView
          style={frames.scroll_view}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <OutlinePost post={data} expanded={true}></OutlinePost>
          <View style={frames.comments}>
            {Object.values(commentData).map((comment) => (
              <Comment comment={comment}></Comment>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

/**
 * Exports the specific comment when clicked by a user.
 * @author Ameer Ghazal
 */
const CommentScreen = (id) => {
  // Get the specific comment by id [REPLACE OUTLINES W/ DATABASE CALL FOR THE COMMENTS].
  const data = findByID(id, commentTester);

  // If undefined, render an error.
  if (!data) {
    return <Text>An error has occured!</Text>;
  }

  // Grab the comments [REPLACE COMMENTTESTER W/ DATABASE CALL FOR COMMENTS].
  const [commentData, setCommentData] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:80/pullPostsFollowing?userID=${currUserID}`)
  //     .then((response) => response.json())
  //     .then((data) => setPostData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  // console.log(postData);
  if (commentData.length === 0) setCommentData(() => commentTester);

  // Return the page featuring the specific comment.
  return (
    <View style={{ flex: 1, backgroundColor: "#1b1b1b", padding: 10 }}>
      <SafeAreaView style={frames.outer_frame}>
        <View style={frames.header}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={"#ffffff"}
            onPress={traverseBack}
            style={aesthetics.icon}
          ></Ionicons>
          <Text style={aesthetics.middleHeader}>Comment</Text>
          <View></View>
        </View>
        <ScrollView
          style={frames.scroll_view}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Comment comment={data} expanded={true}></Comment>
          <View style={frames.comments}>
            {Object.values(commentData).map((comment) => (
              <Comment comment={comment}></Comment>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

/**
 * Exports the specific profile page when clicked.
 * @author Ameer Ghazal
 */
const ProfileScreen = (user_id) => {
  // Get the profile based on the specific id [REPLACE PROFILES W/ DATABASE CALL FOR THE PROFILES].
  // const data = findByID(id, outlines);
  // const userObj = JSON.parse(profile);
  // console.log(userObj);

  // If undefined, render an error.
  if (!user_id) {
    return <Text>An error has occured!</Text>;
  }

  return <ProfileScreen user_id={user_id}></ProfileScreen>;
};

/**
 * Below are all of the styles used.
 * Frames refers to containers, views, etc.
 * Inputs refer to input boxes, some buttons, etc.
 * Aesthetics refer to text, btns, specific styles, borders, etc.
 * @author Ameer G
 */
const frames = StyleSheet.create({
  ultra_outer: {
    backgroundColor: "##1B1B1B",
    flex: 1,
  },

  outer_frame: {
    backgroundColor: "##1B1B1B",
    flex: 1,
  },

  outer_frame_login: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  scroll_view: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    overflow: "hidden",
  },

  header: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1b1b1b",
  },

  logo_sign_in: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  comments: {
    borderTopWidth: 1,
    borderColor: "#4b4b4b",
    flex: 1,
  },
});

const inputs = StyleSheet.create({});

const aesthetics = StyleSheet.create({
  middleHeader: {
    color: "#FFFFFF",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    flex: 1,
  },
});

// export default OutlineScreen;
