/**
 * Entry point of the application.
 * Logs 'Hello, World!' to the console.
 */

import _ from "lodash";
import printMe from "./print.js";
import "./styles/main.scss";

console.log("SASS is now working with Webpack!");

const greet = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  greet("Babel");
