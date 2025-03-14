import bisection from './Algebra/bisection.js';
import discriminator, { intersection_points } from './Algebra/discriminator.js';
import factorial from './factorial.js';
import fibonacci from './fibonacci.js';
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
} from './Helpers/index.js';
import cofactorMatrix from './Matrix/cofactor.js';
import determinant from './Matrix/determinant.js';
import matrixInverse from './Matrix/inverse.js';
import matrix_product from './Matrix/matrix_product.js';
import matrix_sum from './Matrix/matrix_sum.js';
import transpose from './Matrix/transpose.js';
import combination from './Probability/combination.js';
import permutation from './Probability/permutation.js';
import stemleafplot from './Probability/stemleafplot.js';

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

export {
	bisection,
	discriminator,
	intersection_points,
	factorial,
	fibonacci,
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
	cofactorMatrix,
	determinant,
	matrixInverse,
	matrix_product,
	matrix_sum,
	transpose,
	combination,
	permutation,
	stemleafplot,
};
