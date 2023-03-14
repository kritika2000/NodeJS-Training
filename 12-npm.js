/**
 * With node comes npm(node package manager) a repository which stores 
 * packages written by other developers which can be shared with others.
Other developers can install those modules in their app usinf npm install 
modName command.
Packages/Modules/Dependencies -> a reusable code which is basically a 
folder which contains JS code shareable with other developers.
 */

// NPM comes with Node installation and can use npm command.
// npm --version or npm --v to checck the version of npm installed.

//local dependency - use it only in this particular project.
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

// Better to use local dependencies.

/**
 * package.json - manifest file store info about the dependencies or info about the project, script we need
 * to use a package and run the application.
 * npm init to create a package.json file. Create it in the root.
 * npm init -y -> all values(name, version, description etc) are default.
 *
 * Whenever we install a package(first pacakge) we get all the dependencies folders inside node_modules. folder.
 * If a package we install has other dependencies, they'll be installed along with that.
 * We usually push the project without node_modules folder to reduce the size.
 * The developer can install the pacajges when working with the project locally.
 *
 */
// External modules need to be installed first using npm unlike built-in modules.
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);
