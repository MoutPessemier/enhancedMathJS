const factorial = require("functions/factorial");
const fibonacci = require("functions/fibonacci");
const {
  discriminator,
  intersection_points,
} = require("functions/discriminator");
const transpose = require("functions/Matrix/transpose");

const EM = {
  factorial,
  fibonacci,
  discriminator,
  intersectionPoints: intersection_points,
  matrix: {
    transpose,
  },
};

module.exports = EM;
