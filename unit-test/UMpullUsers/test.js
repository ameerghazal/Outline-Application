const fs = require("fs");
const userDataFile = "./testData.csv";

// Example test data
const testData = [
  { id: 1, name: "John", age: 25, city: "New York" },
  { id: 2, name: "Emily", age: 30, city: "London" },
  { id: 3, name: "Michael", age: 35, city: "Paris" },
  { id: 4, name: "Sophia", age: 28, city: "Tokyo" },
  { id: 5, name: "Daniel", age: 32, city: "Berlin" },
];

// Function to read data from the CSV file
function readUserDataFromFile() {
  const fileData = fs.readFileSync(userDataFile, "utf8");
  const lines = fileData.trim().split("\n").slice(1); // Skip header line
  const data = lines.map((line) => {
    const [id, name, age, city] = line
      .split(",")
      .map((item) => item.replace(/\"/g, "").trim());
    return { id: parseInt(id), name, age: parseInt(age), city };
  });
  return data;
}

// Function to pull users from the database
function pullUsers(userIds) {
  const users = readUserDataFromFile();
  return users.filter((user) => userIds.includes(user.id));
}

// Example test case for pullUsers function
function testPullUsers() {
  const userIds = [1, 3, 5]; // Example user IDs to pull
  const expectedUsers = [
    { id: 1, name: "John", age: 25, city: "New York" },
    { id: 3, name: "Michael", age: 35, city: "Paris" },
    { id: 5, name: "Daniel", age: 32, city: "Berlin" },
  ];
  const actualUsers = pullUsers(userIds);

  console.log("Test case - Pull Users:");
  console.log("Expected:", expectedUsers);
  console.log("Actual:", actualUsers);
  console.log(
    "Test passed:",
    JSON.stringify(expectedUsers) === JSON.stringify(actualUsers)
  );
}

testPullUsers();
