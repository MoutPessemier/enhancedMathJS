const factorial = require("functions/factorial");
const fibonacci = require("functions/fibonacci");
const {
  discriminator,
  intersection_points,
} = require("functions/discriminator");
const transpose = require("functions/Matrix/transpose");
const combination = require("functions/Probability/combination");

const EM = {
  factorial,
  fibonacci,
  discriminator,
  intersectionPoints: intersection_points,
  matrix: {
    transpose,
  },
  probability: {
    combination,
  },
};

module.exports = EM;
