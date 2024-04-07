import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Page() {
  return (
    <View>
      <View>
        {/* <Link href="/user_auth/ResetPass">Go to </Link> */}
        <Pressable onPress={() => router.push("SignIn")}>
          <Text>Go to</Text>
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
