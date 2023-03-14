const john = "john";
// secret is not exported so it is locally scoped to this file only.
const secret = "SUPER SECRET";
const peter = "peter";

// When we have multiple values to export we can export them as an object.
module.exports = {
  john,
  peter,
};
