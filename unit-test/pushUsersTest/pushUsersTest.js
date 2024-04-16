/**
 * @author: Ibrahim Mohammad
 */

// Test Data
const simulatedData = [
  { id: 111, username: "user1", status: "follower" },
  { id: 222, username: "user2", status: "dm" },
  { id: 333, username: "user3", status: "blocked" },
  { id: 999, username: "user4", status: "b-r-e-a-k" },
  { id: 999, username: "user5", status: "b-r-e-a-k" },
  { id: 999, username: "user6", status: "b-r-e-a-k" },
  { id: 999, username: "user7", status: "b-r-e-a-k" },
];

// Simulated in-memory user lists
let followers = [];
let directMessages = [];
let blockedUsers = [];
let unknownUsers = [];

// Function to read users from file and update lists
function pushUsers(data) {
  const usersData = data;

  usersData.forEach((user) => {
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
        unknownUsers.push(user);
    }
  });
}

// Test function to check if the pushUsers correctly updates the lists
function testPushUsers() {
  pushUsers(simulatedData); // Execute the function to update user lists

  // Test assumptions
  console.log("Followers:", followers);
  console.log("Direct Messages:", directMessages);
  console.log("Blocked Users:", blockedUsers);
  console.log("Unknownn Users:", unknownUsers);
}

testPushUsers();
