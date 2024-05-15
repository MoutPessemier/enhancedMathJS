import bisection from './Algebra/bisection';
import discriminator, { intersection_points } from './Algebra/discriminator';
import factorial from './factorial';
import fibonacci from './fibonacci';
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
	getHighestRowLength,
	getMatrixMinor,
} from './Helpers/index';
import cofactorMatrix from './Matrix/cofactor';
import determinant from './Matrix/determinant';
import matrixInverse from './Matrix/inverse';
import matrix_product from './Matrix/matrix_product';
import matrix_sum from './Matrix/matrix_sum';
import transpose from './Matrix/transpose';
import combination from './Probability/combination';
import permutation from './Probability/permutation';
import stemleafplot from './Probability/stemleafplot';

const EM = {
	factorial,
	fibonacci,
	algebra: { discriminator, intersectionPoints: { intersection_points, bisection } },
	matrix: {
		transpose,
		sum: matrix_sum,
		product: matrix_product,
		rank,
		determinant,
		cofactorMatrix,
		inverse: matrixInverse,
		mutations: {
			swapRow,
			swapCol,
			swapElement,
			multiplyMatrix,
			multiplyRow,
			multiplyCol,
			fillEmptyRows,
		},
	},
	probability: {
		combination,
		permutation,
		stemleafplot,
	},
	generator: {
		matrix: {
			identity: generateIdentityMatrix,
			zero: generateZeroMatrix,
		},
	},
	helper_functions: {
		getDimensions,
		isFraction,
		isNumber,
		containsStringValues,
		isSquareMatrix,
		getHighestRowLength,
		minorMatrix: getMatrixMinor,
	},
};

export default EM;
