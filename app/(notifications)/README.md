# Setting up a new page for routing (4/7/24, ameer v1)

### preamble

App.js IS NOT USED as of right now. Everything we use is in the `app` folder. when you want to make a page, create a folder with the name in parenthesis `(example)` and ensure it has a `_layout.js`, `Components.js`, `Functions.js`, and `folder.js`.

## FILE EXPLANATION

### index.js (outermost)

What it does:

- this file acts as our current landing page, it's responsible for getting you to your current page.

How its setup:

- Barebones set up as of now. Works by creating a pressable text that calls `router.push()`, that accepts a filename as a parameter. Can be filePath or just the name.

### \_layout.js (outermost)

What it does:

- I don't really know. pretty similar to the index. i Think its more responsible for routing and moving around rather than what's displayed.

How it does:

- Create a <Stack.Screen name= "(example)"> where the (example) matches exactly with the next step. in the `options={{}}` there are many different things to change. play around

## app folder

### (example)

this is used to store your landing page. Ie. if you are working on settings this would display all the settings, and if you have nested pages, like privacy, accessibility, or other such things, then put them further in the file.

right now there are no nested folders in this folder due to our routing not being setup that way yet.

### \_layout.js

this layout file works the exact same as the other one but instead of moving around the entire app it moves you around just your pages.

### Components.js

here store components that you reuse often throughout your pages. for now, we don't have general components but soon

### Example.js

This is the most important. this is like where you land from the `router.push()` from earlier. In the example file, you'll notice that there is only 1 function and that is `Screen` this function will take components from the Components file and import everything. Not writing all the functions here and trying to only use components/children and other such things will allow for very clean and readable code.

That is basically it. Otherwise here is a helpful resource that is good to get you started.
https://www.youtube.com/live/sNixa64aG9Y?si=vVoJlSK0g8MU_F9F
