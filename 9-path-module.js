const path = require("path");

/**
 * Node.js provides you with the path module that allows you to
 * interact with file and directories paths easily.
 */

/**
 * path.sep -> Provides the platform-specific path segment separator:

\ on Windows
/ on POSIX
 */
console.log(path.sep);

/**
 * The path.join() method joins all given path segments together using
 * the platform-specific separator(returned by path.sep) as a delimiter, then normalizes
 * the resulting path.
 */
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".."));
// // Returns: '/foo/bar/baz/asdf'

/**
 * The path.basename() method returns the last portion of a path.
 */
const base = path.basename(filePath);
console.log(base);

/**
 * The path.resolve() method resolves a sequence of paths or path segments
 * into an absolute path.
 */
const absolute = path.resolve("content", "subfolder", "test.txt");
/* 
If no path segments are given as parameters, then the absolute path of the 
current working directory is used.
path.resolve() -> /Users/arya/Desktop/NodeJS-Freecodecamp
path.resolve("content", "subfolder", "test.txt") -> /Users/arya/Desktop/NodeJS-Freecodecamp/content/subfolder/test.txt
*/
console.log(absolute);

/**
 * The path.dirname() method returns the directory name of a path
 */
const dirname = path.dirname("content/subfolder/test.text"); // content/subfolder
console.log(dirname);
