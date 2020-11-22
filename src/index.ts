import factorial from './factorial';
import fibonacci from './fibonacci';
import discriminator, { intersection_points } from './discriminator';
import transpose from './Matrix/transpose';
import matrix_sum from './Matrix/matrix_sum';
import matrix_product from './Matrix/matrix_product';
import combination from './Probability/combination';
import permutation from './Probability/permutation';
import { generateIdentityMatrix } from './Matrix/utils';

const EM = {
  factorial,
  fibonacci,
  discriminator,
  intersectionPoints: intersection_points,
  matrix: {
    transpose,
    sum: matrix_sum,
    product: matrix_product
  },
  probability: {
    combination,
    permutation
  },
  generator: {
    matrix: {
      identity: generateIdentityMatrix
    }
  }
};

export default EM;
