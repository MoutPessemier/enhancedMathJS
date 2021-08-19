# Enhanced Math

This package contain some enhanced mathematical operations:

- Algebra
  - [Bisection(WIP)](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Algebra/bisection.ts)
  - [Discriminator](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Algebra/discriminator.ts)
- [Factorial](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/factorial.ts)
- [Fibonacci](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/fibonacci.ts)
- Matrix:
  - [Cofactor Matrix (WIP)](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L212)
  - [Determinant (WIP)](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/determinant.ts)
  - [Fill Empty Rows](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L212)
  - [Identity Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L74)
  - [Multiply Column](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L189)
  - [Multiply Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L166)
  - [Multiply Row](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L177)
  - [Product](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/matrix_product.ts)
  - [Rank](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L203)
  - [Sum](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/matrix_sum.ts)
  - [Swap Column](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L119)
  - [Swap Element](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L139)
  - [Swap Row](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L103)
  - [Transpose](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/transpose.ts)
  - [Zero Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L88)
- Probability
  - [Combination](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Probability/combination.ts)
  - [Permutation](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Probability/permutation.ts)
- Helper Functions
  - [Contains String Values](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L33)
  - [Get Dimensions](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L22)
  - [Is Fraction](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L14)
  - [Is Number](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L5)
  - [Is Square Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L42)
  - [Highest Row Length](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L52)

### Usage

Start by importing the main object into your document

```js
import EM from 'enhancedmath';
```

Every single method is added onto this object, treat it a bit like the built-in `Math` object. Some methods are divided into further object, so search through the object for what you need.

##### Examples

###### Discriminator

```js
import EM from 'enhancedmath';

const d = EM.discriminator(2, 9, -1);
if (d < 0) {
  console.log('...');
} else if (d === 0) {
  console.log('...');
} else {
  console.log('...');
}
```

###### Matrix - Transpose

```js
import EM from 'enhancedmath';

const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const trans_m = EM.matrix.transpose(m);
console.log(trans_m);
```

### Developer

Mout Pessemier:

- [Twitter](https://twitter.com/MoutPessemier)
- [LinkedIn](https://www.linkedin.com/in/moutpessemier/)

### Contributors

- [reeveng](https://github.com/reeveng)
- [Jef Malfliet](https://github.com/Jef-Malfliet)
- [mxfactorial](https://github.com/mxfactorial)

Copyright 2020 &copy; by Mout Pessemier
