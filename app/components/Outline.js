import { Text } from "react-native-elements";
import OutlinePost from "./OutlinePost";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";

/**
 * Exports the specific outline when clicked by a user. (Expanded page).
 */
export default function OutlineScreen() {
  // Get the specific id.
  const { id } = useGlobalSearchParams();
}
