import { async } from "@firebase/util";
import { Link, router } from "expo-router";

export function openChat(userId, userName) {
  // Log to see if this function is called with correct parameters
  console.log("Navigating to chat with:", userId, userName);
  router.push("DMChat", { userId, userName });
}

export const getUsers = async () => {
  const docRef = collection(db);
};
