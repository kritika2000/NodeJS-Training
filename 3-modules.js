/* Modules -> allow us to split the code in may files called modules.
Node JS has commonJS module support(every file is module by default).*/
// Modules make the code reusable as we can require a module in another files.
// Through modules we only share what we want i.e. what we export only that can be imported.

// const john = "john";
// const sayHi = (name) => {
//   console.log(`Hello There ${name}`);
// };

// Accessing/Importing john, peter from 4-names.js
const { john, peter } = require("./4-names");
// Accessing sayHi from 3-modules.js
// sayHi can be anything as it is exported by default.
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
console.log(data); // { items: [ 'item1', 'item2' ], person: { name: 'bob' } }

// It will execute the module we imported even if we haven't exported anything.
require("./7-mind-grenade");
sayHi(peter);
sayHi(john);

/**
 * Node has bunch of built-in modules.
 * We'll cover about os, path, fs, http modules.
 */
