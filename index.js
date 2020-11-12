const factorial = require("functions/factorial");
const fibonacci = require("functions/fibonacci");
const {
  discriminator,
  intersection_points,
} = require("functions/discriminator");

const EM = {
  factorial,
  fibonacci,
  discriminator,
  intersectionPoints: intersection_points,
};

module.exports = EM;
