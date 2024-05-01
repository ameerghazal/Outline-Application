import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BackBar } from "../(user_auth)/Components";
import { useState } from "react";

import globalStyles from "./globalStyles";
import SwitchOption from "../components/SwitchOption";
import { usePushNotifications } from "../usePushNotifications";

function NotificationsPage() {
  const { expoPushToken, notification, registerForPushNotificationsAsync } =
    usePushNotifications();

  const data = JSON.stringify(notification, undefined, 2);

  // State declarations
  const [isPushNotisEnabled, setIsPushNotisEnabled] = useState(false);

  const handlePushNotificationToggle = async (isEnabled) => {
    setIsPushNotisEnabled(isEnabled);
    if (isEnabled) {
      await registerForPushNotificationsAsync();
    }
  };

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

      <Text style={globalStyles.text}>{expoPushToken?.data ?? ""}</Text>
      <Text style={globalStyles.text}>{data}</Text>

      <View style={globalStyles.section}>
        <SwitchOption
          label="Push Notifications"
          value={isPushNotisEnabled}
          onValueChange={handlePushNotificationToggle}
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
          disabled={!isPushNotisEnabled}
        />
        <SwitchOption
          label="Chat Requests"
          value={isChatRequests}
          onValueChange={setIsChatRequests}
          style={styles.bottomCorners}
          disabled={!isPushNotisEnabled}
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
          disabled={!isPushNotisEnabled}
        />
        <SwitchOption
          label="Comments on your posts"
          value={isCommentsOnYourPosts}
          onValueChange={setIsCommentsOnYourPosts}
          disabled={!isPushNotisEnabled}
        />
        <SwitchOption
          label="Likes on your posts"
          value={isLikesOnYourPosts}
          onValueChange={setIsLikesOnYourPosts}
          disabled={!isPushNotisEnabled}
        />
        <SwitchOption
          label="Likes on your comments"
          value={isLikesOnYourComments}
          onValueChange={setIsLikesOnYourComments}
          disabled={!isPushNotisEnabled}
        />
        <SwitchOption
          label="Replies to your comments"
          value={isRepliesToYourComments}
          onValueChange={setIsRepliesToYourComments}
          style={styles.bottomCorners}
          disabled={!isPushNotisEnabled}
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
