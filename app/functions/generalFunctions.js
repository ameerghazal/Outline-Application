import { router } from "expo-router";
import { useRouter } from "expo-router";

/**
 * Goes back to the previous page.
 * TODO: Implement and make genric.
 * @author Ameer G.
 */
export function traverseBack() {
  return router.back();
}
