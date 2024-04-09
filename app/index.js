import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Page() {
  return (
    <View>
      <View>
        {/* <Link href="/user_auth/ResetPass">Go to </Link> */}
        {/* Gay comment explaining pressable and how to route big page */}
        <Pressable onPress={() => router.push("Example")}>
          <Text>Click for Example</Text>
        </Pressable>
        <Pressable onPress={() => router.push("Example")}>
          <Text>Click for Profile Page</Text>
        </Pressable>
        <Pressable onPress={() => router.push("SignIn")}>
          <Text>Push for Ameer</Text>
        </Pressable>
        <Pressable onPress={() => router.push("HomeFeed")}>
          <Text>Click for Home Feed</Text>
        </Pressable>
        <Text>Hello World</Text>
        <Text>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
