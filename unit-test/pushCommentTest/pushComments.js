const fs = require("fs");
const { parse } = require("papaparse");

// Define the path to the comments.csv file
const filePath = "./comments.csv";
// Open a write stream to the file, appending if it already exists
const stream = fs.createWriteStream(filePath, { flags: "a" });

function pushComments(comments) {
  // Iterate through each comment and write it to the file
  comments.forEach((comment) => {
    const { id, comment: commentText, post_id } = comment;
    stream.write(`${id},"${commentText.replace(/"/g, '""')}",${post_id}\n`);
  });
}

// Test cases
const comments1 = [
  { id: 1, comment: "1st", post_id: 1 },
  { id: 3, comment: "3rd", post_id: 1 },
];

const comments2 = [
  { id: 2, comment: "2nd", post_id: 3 },
  { id: 5, comment: "5th", post_id: 3 },
];

const comments3 = [{ id: 4, comment: "4th", post_id: 2 }];

// Example usage
pushComments(comments1);
pushComments(comments2);
pushComments(comments3);

// Close the stream
stream.end();

// Function to read and parse the CSV file into an array of comment objects
function readCommentsFromCSV(callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the CSV file:", err);
      callback(err, null);
      return;
    }
    // Parse the CSV content. Assuming the CSV has headers.
    const parsed = parse(data, { header: true, skipEmptyLines: true });
    const comments = parsed.data.map((row) => ({
      id: parseInt(row.id, 10),
      comment: row.comment,
      post_id: parseInt(row.post_id, 10),
    }));
    callback(null, comments);
  });
}

// Tester function to check if the comments in the CSV match the expected comments
function testComments(expectedComments) {
  readCommentsFromCSV((err, actualComments) => {
    if (err) {
      console.log("Test failed due to error reading comments.");
      return;
    }

    // Convert both arrays to string for easy comparison (assuming order matters)
    const expectedString = JSON.stringify(
      expectedComments.sort((a, b) => a.id - b.id)
    );
    const actualString = JSON.stringify(
      actualComments.sort((a, b) => a.id - b.id)
    );

    if (expectedString === actualString) {
      console.log(
        "Test passed: The comments in the CSV match the expected comments."
      );
    } else {
      console.log(
        "Test failed: The comments in the CSV do not match the expected comments."
      );
    }
  });
}

// Example usage
const expectedComments = [
  { id: 1, comment: "1st", post_id: 1 },
  { id: 3, comment: "3rd", post_id: 1 },
  { id: 4, comment: "4th", post_id: 2 },
  { id: 2, comment: "2nd", post_id: 3 },
  { id: 5, comment: "5th", post_id: 3 },
];

testComments(expectedComments);
