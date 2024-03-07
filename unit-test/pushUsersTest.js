const fs = require("fs");

// Simulated in-memory user lists
let followers = [];
let directMessages = [];
let blockedUsers = [];

// Function to read users from file and update lists
function pushUsers() {
  const usersData = fs
    .readFileSync("sampleUsers.txt", "utf8")
    .trim()
    .split("\n");
  usersData.forEach((userData) => {
    const user = JSON.parse(userData);
    switch (user.status) {
      case "follower":
        followers.push(user);
        break;
      case "dm":
        directMessages.push(user);
        break;
      case "blocked":
        blockedUsers.push(user);
        break;
      default:
        // Handle unknown status
        console.log(`Unknown status for user: ${user.username}`);
    }
  });
}

// Test function to check if the pushUsers correctly updates the lists
function testPushUsers() {
  pushUsers(); // Execute the function to update user lists

  // Test assumptions
  console.log("Followers:", followers);
  console.log("Direct Messages:", directMessages);
  console.log("Blocked Users:", blockedUsers);

  // Example assertions (you can replace these with actual test framework assertions)
  console.log(
    "Test Followers:",
    followers.length === 1 && followers[0].username === "user1"
  );
  console.log(
    "Test DMs:",
    directMessages.length === 1 && directMessages[0].username === "user2"
  );
  console.log(
    "Test Blocked:",
    blockedUsers.length === 1 && blockedUsers[0].username === "user3"
  );
}

testPushUsers();
