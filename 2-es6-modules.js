import os from "os";

console.log(os);

/* 
    Add "type": "module" in package.json to add ES6 module 
    support or set the .mjs file extention the  we don't need to add
    "type": "module" inside package.json
    run the file using the command node –experimental-modules index.mjs
    OR install esm using npm install esm and run command -> node -r esm fileName
    to run the file.
*/
