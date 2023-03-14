// <!-- -------------------- GLOBALS ----------------------- -->

/**
 * In Node JS we have global object not a window object.
 * global object comes with a lot of APIs(classes, functions, objects etc.).
 * We don't need to import them to use them, they're scoped to the global namespace.
 *
 * global object contains some APIs eg:- setTimeout like we have in window object.
 *
 * global has a require function which imports the module required by a JS file.
 * __dirname - path to the current directory.
 * __filename - gives the filename.
 * module - gives the info about the current module.
 * process - gives info about the environment where our code is being executed.
 * in developement it is our local machine but in a production environment it is
 * production server only.
 * */

console.log(__dirname);
// consles the current directory -> /Users/arya/Desktop/NodeJS-Freecodecamp.

// node js setTimeout version.
setTimeout(() => {
  console.log("one second passed!");
}, 1000);

/* create a variable in the global scope.
The scope of global variables is not limited to the function scope or
 any particular JavaScript file. It can be declared in one place and 
 then used in multiple places.
 In browser, we can create globally scoped variables using var which causes namespace
 pollution.
 https://www.knowledgehut.com/blog/web-development/node-js-global-variables
*/
global.x = 10;
console.log(global.x);
