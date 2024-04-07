import { Stack } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const UserAuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="user_auth/SignIn"
        options={{
          headerShown: false,
          // headerStyle: {},
        }}
      />
      <Stack.Screen
        name="user_auth/SignUp"
        options={{
          headerShown: false,
          // headerStyle: {},
        }}
      />
      <Stack.Screen
        name="user_auth/SignUpExt"
        options={{
          headerShown: false,
          // headerStyle: {},
        }}
      />
      <Stack.Screen
        name="user_auth/ResetPass"
        options={{
          headerShown: false,
          // headerStyle: {},
        }}
      />
    </Stack>
  );
};

export default UserAuthLayout;
