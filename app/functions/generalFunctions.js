import { router } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { FIREBASE_AUTH } from "../../firebase";

/**
 * Goes back to the previous page.
 * TODO: Implement and make genric.
 * @author Ameer G.
 */
export function traverseBack() {
  return router.back();
}
/**
 * Gets the current user from firebase.
 * TODO: Implement and make genric.
 * @author Nirwaan Azhar
 */
export function getFirebaseUID() {
  return new Promise(async (resolve, reject) => {
    try {
      const currentUser = await FIREBASE_AUTH.currentUser.uid;
      const response = await fetch(
        `http://localhost:80/pullPostsFollowing?userID=${currentUser}`
      );
      const data = await response.json();
      resolve({ currentUser, data });
    } catch (error) {
      reject(error);
    }
  });
}
