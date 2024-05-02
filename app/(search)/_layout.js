import React from "react";
import { Stack } from "expo-router";

/**
 * Used for navigation around the page inside your workspace. Ie profile folder uses this to navigate to edit profile, as well as different tabs.
 * @returns different page in the same workspace
 */
const SearchLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Search"
        options={
          {
            // hella featuers, hit up ameerG
            headerShown: false,
            headerStyle: {},
          }
        }
      />
    </Stack>
  );
};

export default SearchLayout;
