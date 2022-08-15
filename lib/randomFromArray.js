const random = require("./random.js");

module.exports = function randomFromArray(arr) {
  let index = Math.floor(random(0, arr.length));
  return arr[index];
}
