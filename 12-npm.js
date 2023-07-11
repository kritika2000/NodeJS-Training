/**
 * With node comes npm(node package manager) a repository which stores 
 * packages written by other developers which can be shared with others.
Other developers can install those modules in their app using npm install 
modName command.
Packages/Modules/Dependencies -> a reusable code which is basically a 
folder which contains JS code shareable with other developers.
 */

// NPM comes with Node installation and can use npm command.
// npm --version or npm --v to check the version of npm installed.

//local dependency - use it only in this particular project.
//npm i <packageName>
// npm i packageName --saveDev/-D to save as devDependency(for rg, eslint, testing packages etc)

//global dependency - use it in any project
//npm install -g <packageName>

// Better to use local dependencies.

// to uninstall the package, use npm uninstall packageName or remove the dependency for package.json and then do npm install

/**
 * package.json - manifest file store info about the dependencies or info about the project, script we need
 * to use a package and run the application.
 * npm init to create a package.json file. Create it in the root.
 * npm init -y -> all values(name, version, description etc) are default.
 *
 * Whenever we install a package(first pacakge) we get all the dependencies folders inside node_modules. folder.
 * If a package we install has other dependencies, they'll be installed along with that.
 * We usually push the project without node_modules folder to reduce the size.
 * The developer can install the packages when working with the project locally using npm install command
 * and install the packages listed inside the package.json file. That is why we need
 * package.json file.
 *
 * We can add scripts also, like start, build inside scripts object.
 * nodemon keeps looking for changes in the file, it doesn't stop executing in the terminal after running
 * the script/file like node app.js does. It waits for another changes and restarts the app
 * without exiting.
 *
 * https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/
 */
// External modules need to be installed first using npm unlike built-in modules.
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);

/****************************************************** NPM LINKEDIN *****************************************************/

/**
 *
 * NPM is preinstalled with Node JS.
 * Used to install dependencies/packages from npm registry which our project depends upon.
 * All NPM pacakges comes with a package.json file which has info about who created it, version etc.
 * Package/Module/Dependencies -> a file/folder which contains some functionality written in JS.
 * For eg -> we can use react-router npm package in our react project if we want to use routers.
 *
 * Steps to use NPM:-
 * 1. Install Node.
 * 2. NPM comes with Node installation.
 * 3. npm init -> to create a package.json file. The name of the package
 *    is what is visible to others or is published.
 *
 * Adding packages locally -> It is installed in the project directory only and those packages cannot
 * be used in other projects. Use npm i/install package-name to install the package locally.
 * Use -g flag to install gloally.
 * use --saveDev/-D to install as dev dependency and it will not be installed in production build but are used during developement.
 * Sometime we need to use sudo command to install a package globally.
 * Use npm list command to list all the npm dependencies and add -g flag to get the global dependencies.
 *
 * We can install a specific version of a package using npm install packageName@version command.
 * npm outdated -g(optional) -> displays what dependencies need to be updated i.e dependencies which have their
 * current version lesser than the latest.
 * use npm unistall command to remove a package.
 *
 * Semantic Versioning -> version 1.2.4 -> major-release.minor-release.patch-release
 *  major release -> full new version of a software.
 *  minor release -> like adding new functions.
 *  patch release -> fixing bugs.
 *
 * Carret ^1.x.x -> default when installing new packages, defines a range of acceptable versions that
 * include all patch and minor versions from the ones specified up to, but not including,
 * the next version. So "^1.2.3" can be approximately expanded as ">=1.2.3 <2.0.0"
 *
 * Tilde ~1.x.x -> defines a range of acceptable versions that include all patch versions
 * from the one specified up to, but not including, the next minor version. "~1.2.3" can be
 * approximately expanded as ">=1.2.3 <1.3.0".
 *
 * Remove characters if want a fixed version(not recommended).
 *
 * package-lock.json -> it controls versioning by always installing the package with version
 * mentioned in package-lock.json.
 * Eg:- If package-lock.json and package.json have same verions(say I'm working on it locally) and the
 * I publish the package and some another developer downloads the code and runs npm install then, without
 * package-lock.json it can install new version if the version includes ^/~
 * and can break the app. With package-lock.json the previous version is locked and is not changed on npm install
 * but the version mentioned in it will be installed.
 *
 * npm audit -> checks if the dependencies have any issues. Can be used with npm version >=6
 * SCRIPTS:-
 * test, start, build, dev, publish available by default.
 * Add a script property and the value will be the command to run and script is run.
 * "start" : "nodemon ./index.js" use npm start or npm run start to run the script.
 *
 * We can create out own script with presets that don't exist.
 * "nodemon": "nodemon ./index.js" => npm run nodemon to run the script.
 *
 * npx let you execute a package without installing it.
 * yarn is an alternative to npm.
 */
