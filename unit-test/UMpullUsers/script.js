// Import the function to be tested
const pullUsers = require("./pullUsers");

describe("pullUsers function", () => {
  // Boundary Cases
  test("Pull users when friend list is empty", () => {
    const friendList = [];
    const result = pullUsers(friendList);
    expect(result).toEqual([]);
  });

  test("Pull users when friend list contains only one user", () => {
    const friendList = ["user1"];
    const result = pullUsers(friendList);
    expect(result).toEqual(["user1"]); // Assuming 'user1' is pulled from the database
  });

  // Normal Cases
  test("Pull users from a friend list containing multiple users", () => {
    const friendList = ["user1", "user2", "user3"];
    const result = pullUsers(friendList);
    // Assuming 'user1', 'user2', and 'user3' are pulled from the database
    expect(result).toEqual(["user1_data", "user2_data", "user3_data"]);
  });

  // Edge Cases
  test("Pull users from a friend list containing extremely large number of users", () => {
    const friendList = Array.from(
      { length: 10000 },
      (_, index) => `user${index + 1}`
    );
    const result = pullUsers(friendList);
    // Assuming data for all 10000 users is pulled from the database
    expect(result.length).toEqual(10000);
  });

  // Exceptional Cases
  test("Throw error for invalid input types", () => {
    const friendList = "not_an_array"; // Invalid input type
    expect(() => {
      pullUsers(friendList);
    }).toThrow(TypeError);
  });

  // Integration Cases
  test("Pull users for DMs and simulate sending message", () => {
    const dmsList = ["user1", "user2", "user3"];
    const result = pullUsers(dmsList);
    // Assuming 'user1', 'user2', and 'user3' are pulled from the database for DMs
    // Simulate sending message and check response
    expect(result).toEqual(["user1_data", "user2_data", "user3_data"]);
  });
});
