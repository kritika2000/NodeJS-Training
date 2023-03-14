const items = ["item1", "item2"];
const person = {
  name: "bob",
};

// Instead of exporting multiple properties as a single object, we can export individual
// property.

// Internally, this creates items, person properties to module.exports object.
module.exports.items = items;
module.exports.person = person;
