import factorial from './factorial';
import fibonacci from './fibonacci';
import discriminator, { intersection_points } from './discriminator';
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
  rank
} from './Matrix/utils';
import combination from './Probability/combination';
import permutation from './Probability/permutation';
import { getDimensions, isFraction, isNumber, containsStringValues, isSquareMatrix } from './Helpers/index';

const EM = {
  factorial,
  fibonacci,
  discriminator,
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
      multiplyCol
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
    isSquareMatrix
  }
};

export default EM;
