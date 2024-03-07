// Unit-test for the Render-Message file.
// This will be generic, which can be reused to test other files.
// @author: Ameer Ghazal

// 1): Grab the data rendered from the page.
const DM = document.querySelector(".direct_messages");
const friend = document.querySelector(".friend_1");
const message = document.querySelector(".message");

/**
 * Objectifyes an element given the DOM element.
 * @param {*} element element on the page to be objectifyed.
 * @returns returns an objectifyed element, featuring the class name, children, and textcontent.
 * @author Ameer Ghazal
 */
function objectify(element) {
  // a): Get the data from the element.
  const className = element.className; // Store the element class name.
  let textContent = "";
  let children = "";
  let childNode = [];

  // b): If no children, initalize the text context.
  if (element.children.length == 0) textContent = element.textContent;
  else {
    // c): Otherwise, get each child and recursivley objectify each one.
    children = [...element.children];
    children.map((element) => childNode.push(objectify(element)));
  }

  // console.log(className, children, textContent);

  // d): Create an object.
  const obj = [
    {
      class: `${className}`,
      children: children === "" ? "" : childNode.flat(), // flatten out the arrays.
      textContent: textContent,
    },
  ];

  // e): Return the object.
  return obj;
}

// 2): Objectify the DOM elements.
const DM_Obj = objectify(DM);
const friend_Obj = objectify(friend);
const message_Obj = objectify(message);

// 3): Test 1 (Should be fail, wrong class.)
const test1 = [{ class: "messages", children: "", textContent: "Yo" }];
console.log(JSON.stringify(message_Obj) == JSON.stringify(test1)); // Stringify the objects to get the inner information and compare.

// 4): Test 2 (friend, should pass).
const test2 = [
  {
    class: "friend_1",
    children: [
      { class: "message", children: "", textContent: "Yo" },
      {
        class: "message",
        children: "",
        textContent: "Hello, I am under the water.",
      },
      { class: "message", children: "", textContent: "OMG, what's up bro!" },
      { class: "message", children: "", textContent: "BRO!" },
    ],
    textContent: "",
  },
];
console.log(JSON.stringify(friend_Obj) == JSON.stringify(test2)); // Stringify the objects to get the inner information and compare.

// 5): Test 3 (entire div, should pass).
const test3 = [
  {
    class: "direct_messages",
    children: [
      {
        class: "friend_1",
        children: [
          { class: "message", children: "", textContent: "Yo" },
          {
            class: "message",
            children: "",
            textContent: "Hello, I am under the water.",
          },
          {
            class: "message",
            children: "",
            textContent: "OMG, what's up bro!",
          },
          { class: "message", children: "", textContent: "BRO!" },
        ],
        textContent: "",
      },
      {
        class: "friend_2",
        children: [
          { class: "message", children: "", textContent: "What's up." },
          { class: "message", children: "", textContent: "No way, bro!" },
          { class: "message", children: "", textContent: "What's good bro." },
          {
            class: "message",
            children: "",
            textContent: "Nothing much brodie.",
          },
        ],
        textContent: "",
      },
    ],
    textContent: "",
  },
];
console.log(JSON.stringify(DM_Obj) == JSON.stringify(test3)); // Stringify the objects to get the inner information and compare.
