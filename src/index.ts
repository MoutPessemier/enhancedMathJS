import factorial from './factorial';
import fibonacci from './fibonacci';
import discriminator, { intersection_points } from './discriminator';
import transpose from './Matrix/transpose';
import combination from './Probability/combination';

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

export default EM;
