// Unit-test for the Render-Message file.
// This will be generic, which can be reused to test other files.
// @author: Ameer Ghazal

// const { RenderMessage } = require("./sampleMessage.txt");

// Get the file system.
const fs = require("fs");

// Path to the text file.
const filePath = "sampleMessage.txt";

// Read the file in.
fs.readFile(filePath, "utf8", (err, data) => {
  err ? console.error(err) : "";
});

// Test case
test("RenderMessage returns the correct message", () => {
  // Mock data
  const message = "Hello, world!";

  // Call the function
  const result = RenderMessage(message);

  // Assertion
  expect(result).toBe("<div>Hello, world!</div>");
});
