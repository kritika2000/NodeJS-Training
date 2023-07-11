import util from "util";
import { readFile, writeFile } from "fs";

/**
 *
 * If we do const {readFile} = require('fs').promises, then we don't need to use util,
 * we can use readFile directly instead of getText/readFilePromise.
 * A more better approach
 */

//Reading two files synchronously using promises.
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      else {
        resolve(data);
      }
    });
  });
};

// The above getText function is only promisifying readFile function, we can do the same usinf uti.promisify
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

/*
    getText("../content/first.txt")
  .then((data) => {
    console.log(data);
    getText("../content/second.txt")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.log(err);
  });
*/
/* 
    This will run first as by returing promises the task becomes async.
    console.log("Next Task!"); 
*/
// Reading two files synchronously using await.
const start = async (path) => {
  // once the first file is read then the next line is executed.
  try {
    // Replaces .then chaining with async/await.
    // const first = await getText("../content/first.txt");
    // const second = await getText("../content/second.txt");
    /** Using util.promisify */
    const first = await readFilePromise("../content/first.txt", "utf8");
    const second = await readFilePromise("../content/second.txt", "utf8");
    await writeFilePromise(
      "../content/result-mid-grenade.txt",
      `THIS IS AWSOME: ${first} ${second}`
    );

    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();
