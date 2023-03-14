/* The fsmodule provides us API to interact with the File System of 
the operating system (Server).
 * All file operations may synchronous or asynchronous I/O operations.
 *Below are the basic file operations:-
 * Reading file
 * Writing file
 * Opening file
 * Deleting file
 * Renaming file
 * Copying files
https://medium.com/analytics-vidhya/intro-to-file-system-in-nodejs-8fc3fe6f0eb1
 */

/************************ SYNC ************************* */

const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

console.log("Starting with the task!");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second); // consoles the content of the files.

// Creating a new file.

/**
 * if the file exists already, then node replaces the content mentioned otherwise it creates a new one and put
 * the content there.
 * If the content need to be appended, then add a new argument {flag: 'a'}.
 */
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} ${second}`,
  { flag: "a" }
);

console.log("Done with the task");
/************************ ASYNC ************************* */

// Async operations(non-blocking) needs callback whoch runs once the file has been read/written.

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  /*  We get a buffer string if we don't provide a encoding(utf8).
  <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e>
  */
  const first = result;
  /*  If we want to read the another file only after one has loaded(doing sync tasks using async), then we need to
    read the new file inside the callback of the first one.
  */
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // Now writing a file with the contents of both the files.
    writeFile(
      "./content/result-async.txt",
      `Here is the Async result: ${first} ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

/**
 * Sync file operations takes some time to be completed and blocks the other js code
 * to be executed.
 * Async is better in cases one one file operation's result doesn't depends on the other.
 * Better use promise and async-await than callback.
 */
