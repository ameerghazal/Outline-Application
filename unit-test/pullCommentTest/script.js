/* 
id,comment,post_id
1,"1st",1
2,"2nd",3
3,"3rd",1
4,"4th",2
5,"5th",3
6,"6th",1
*/
const fs = require("fs");
const dataFile = "./comments.csv";

// Test case 1: post_id = 1 (this should fail)
const expectedPost1Comments = [
  { id: 1, comment: "1st", post_id: 1 },
  { id: 3, comment: "3rd", post_id: 1 },
];

// Test case 3: post_id = 3
const expectedPost3Comments = [
  { id: 2, comment: "2nd", post_id: 3 },
  { id: 5, comment: "5th", post_id: 3 },
];

// Test case 2: post_id = 2
const expectedPost2Comments = [{ id: 4, comment: "4th", post_id: 2 }];

// Function to read data from the CSV file
function readDataFromFile() {
  const fileData = fs.readFileSync(dataFile, "utf8");
  const lines = fileData.trim().split("\n").slice(1); // Skip header line
  const data = lines.map((line) => {
    const [id, comment, post_id] = line
      .split(",")
      .map((item) => item.replace(/\"/g, "").trim());
    return { id: parseInt(id), comment, post_id: parseInt(post_id) };
  });
  return data;
}

// Function to filter comments based on post_id
function pullComments(post_id) {
  const comments = readDataFromFile();
  return comments.filter((comment) => comment.post_id === post_id);
}

function testPullComments() {
  const actualPost1Comments = pullComments(1); // pull comments with id 1
  console.log("Test case 1 - Post 1 Comments:");
  console.log("Expected:", expectedPost1Comments); // print expected/hardcoded
  console.log("Actual:", actualPost1Comments); // print database data
  console.log(
    "Test passed:",
    JSON.stringify(expectedPost1Comments) ===
      JSON.stringify(actualPost1Comments)
  ); // compare string version of object arrays and see if test passed

  const actualPost2Comments = pullComments(2);
  console.log("Test case 2 - Post 2 Comments:");
  console.log("Expected:", expectedPost2Comments);
  console.log("Actual:", actualPost2Comments);
  console.log(
    "Test passed:",
    JSON.stringify(expectedPost2Comments) ===
      JSON.stringify(actualPost2Comments)
  );

  const actualPost3Comments = pullComments(3);
  console.log("Test case 3 - Post 3 Comments:");
  console.log("Expected:", expectedPost3Comments);
  console.log("Actual:", actualPost3Comments);
  console.log(
    "Test passed:",
    JSON.stringify(expectedPost3Comments) ===
      JSON.stringify(actualPost3Comments)
  );
}

testPullComments();
