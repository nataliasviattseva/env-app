# env-app

https://webpack.js.org/guides/getting-started/

Basic Setup
First let's create a directory, initialize npm, install webpack locally, and install the webpack-cli (the tool used to run webpack on the command line):

mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
Throughout the Guides we will use diff blocks to show you what changes we're making to directories, files, and code. For instance:

 this is a new line you shall copy into your code
  and this is a line not to touch.
Now we'll create the following directory structure, files and their contents:

project

  webpack-demo
  |- package.json
  |- package-lock.json
 |- index.html
 |- /src
   |- index.js
src/index.js

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
index.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
We also need to adjust our package.json file in order to make sure we mark our package as private, as well as removing the main entry. This is to prevent an accidental publish of your code.

tip
If you want to learn more about the inner workings of package.json, then we recommend reading the npm documentation.

package.json

 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
  "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.38.1",
     "webpack-cli": "^4.7.2"
   }
 }
In this example, there are implicit dependencies between the <script> tags. Our index.js file depends on lodash being included in the page before it runs. This is because index.js never explicitly declared a need for lodash; it assumes that the global variable _ exists.

There are problems with managing JavaScript projects this way:

It is not immediately apparent that the script depends on an external library.
If a dependency is missing, or included in the wrong order, the application will not function properly.
If a dependency is included but not used, the browser will be forced to download unnecessary code.
Let's use webpack to manage these scripts instead.




https://jestjs.io/docs/getting-started


npm install --save-dev jest

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:

function sum(a, b) {
  return a + b;
}
module.exports = sum;

Then, create a file named sum.test.js. This will contain our actual test:

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

Add the following section to your package.json:

{
  "scripts": {
    "test": "jest"
  }
}

Finally, run yarn test or npm test and Jest will print this message:

PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)


npm install --save-dev webpack webpack-cli




https://jsdoc.app/about-getting-started








npm install --save-dev webpack webpack-cli


