const sayHi = (name) => {
  console.log(`Hello There ${name}`);
};
// exporting sayHi to be used in 3-modules.js
// similar to export default.
module.exports = sayHi;
