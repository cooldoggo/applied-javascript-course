// commonjs
// const { doIt } = require('./utils.js');

// This is how we can enable ES2015 modules in Node.js:
// 1. To use ES2015 modules, I can employ a transpiler too convert the 
// code to CommonJS.
// 2. I can set the "type" field in package.json to module


import { doIt } from './utils.js';

console.log("Hello, World!");
doIt();
