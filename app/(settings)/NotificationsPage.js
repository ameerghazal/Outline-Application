import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import { useState } from "react";

import globalStyles from "./globalStyles";
import SwitchOption from "../components/SwitchOption";

function NotificationsPage() {
  // State declarations
  const [isPushNotisEnabled, setIsPushNotisEnabled] = useState(true);
  const [isPrivateMessage, setIsPrivateMessage] = useState(true);
  const [isChatRequests, setIsChatRequests] = useState(true);
  const [isMentions, setIsMentions] = useState(true);
  const [isCommentsOnYourPosts, setIsCommentsOnYourPosts] = useState(true);
  const [isLikesOnYourPosts, setIsLikesOnYourPosts] = useState(true);
  const [isLikesOnYourComments, setIsLikesOnYourComments] = useState(true);
  const [isRepliesToYourComments, setIsRepliesToYourComments] = useState(true);

  return (
    <ScrollView style={globalStyles.container}>
      <BackBar />

      <View style={globalStyles.section}>
        <SwitchOption
          label="Push Notifications"
          value={isPushNotisEnabled}
          onValueChange={setIsPushNotisEnabled}
          style={[styles.bottomCorners, styles.topCorners]} // style props for border radius
        />
      </View>

      <Text style={[globalStyles.text, globalStyles.marginBottom]}>
        Messages
      </Text>
      <View style={globalStyles.section}>
        <SwitchOption
          label="Private Message"
          value={isPrivateMessage}
          onValueChange={setIsPrivateMessage}
          style={styles.topCorners}
        />
        <SwitchOption
          label="Chat Requests"
          value={isChatRequests}
          onValueChange={setIsChatRequests}
          style={styles.bottomCorners}
        />
      </View>

      <Text style={[globalStyles.text, globalStyles.marginBottom]}>
        Activity
      </Text>
      <View style={globalStyles.section}>
        <SwitchOption
          label="Mentions"
          value={isMentions}
          onValueChange={setIsMentions}
          style={styles.topCorners}
        />
        <SwitchOption
          label="Comments on your posts"
          value={isCommentsOnYourPosts}
          onValueChange={setIsCommentsOnYourPosts}
        />
        <SwitchOption
          label="Likes on your posts"
          value={isLikesOnYourPosts}
          onValueChange={setIsLikesOnYourPosts}
        />
        <SwitchOption
          label="Likes on your comments"
          value={isLikesOnYourComments}
          onValueChange={setIsLikesOnYourComments}
        />
        <SwitchOption
          label="Replies to your comments"
          value={isRepliesToYourComments}
          onValueChange={setIsRepliesToYourComments}
          style={styles.bottomCorners}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
  },
  option: {
    backgroundColor: "#4B4B4B",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topCorners: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomCorners: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default NotificationsPage;
