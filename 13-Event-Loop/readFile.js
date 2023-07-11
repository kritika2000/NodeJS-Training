const { readFile, writeFile } = require("fs");

console.log("started a first task");
// CHECK FILE PATH!!!!
/*
    async file reading so event loop will offload this from the callstack
    and contnue running the other lines of code and once the file is read
    it's callback function will be pushed in the callback queue and event loop
    will push the callback function into the call stack if it is empty.

*/
readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");
