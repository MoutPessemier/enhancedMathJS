import factorial from './factorial';
import fibonacci from './fibonacci';
import discriminator, { intersection_points } from './Algebra/discriminator';
import bisection from './Algebra/bisection';
import transpose from './Matrix/transpose';
import matrix_sum from './Matrix/matrix_sum';
import matrix_product from './Matrix/matrix_product';
import {
  generateIdentityMatrix,
  generateZeroMatrix,
  swapCol,
  swapElement,
  swapRow,
  multiplyMatrix,
  multiplyRow,
  multiplyCol,
  rank,
  getDimensions,
  isFraction,
  isNumber,
  containsStringValues,
  isSquareMatrix,
  fillEmptyRows,
  getHighestRowLength
} from './Helpers/index';
import combination from './Probability/combination';
import permutation from './Probability/permutation';

const EM = {
  factorial,
  fibonacci,
  algebra: {
    discriminator,
    bisection
  },
  intersectionPoints: intersection_points,
  matrix: {
    transpose,
    sum: matrix_sum,
    product: matrix_product,
    rank,
    mutations: {
      swapRow,
      swapCol,
      swapElement,
      multiplyMatrix,
      multiplyRow,
      multiplyCol,
      fillEmptyRows
    }
  },
  probability: {
    combination,
    permutation
  },
  generator: {
    matrix: {
      identity: generateIdentityMatrix,
      zero: generateZeroMatrix
    }
  },
  helper_functions: {
    getDimensions,
    isFraction,
    isNumber,
    containsStringValues,
    isSquareMatrix,
    getHighestRowLength
  }
};

export default EM;
