# Enhanced Math

This package contains some enhanced mathematical operations:

- Algebra
  - [Bisection](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Algebra/bisection.ts)
  - [Discriminator](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Algebra/discriminator.ts)
- [Factorial](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/factorial.ts)
- [Fibonacci](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/fibonacci.ts)
- Matrix:
  - [Co-factor Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/cofactor.ts)
  - [Determinant](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/determinant.ts)
  - [Fill Empty Rows](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L61)
  - [Identity Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L81)
  - [Inverse Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/inverse.ts)
  - [Minor Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L221)
  - [Multiply Column](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L196)
  - [Multiply Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L173)
  - [Multiply Row](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L184)
  - [Product](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/matrix_product.ts)
  - [Rank](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L210)
  - [Sum](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/matrix_sum.ts)
  - [Swap Column](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L126)
  - [Swap Element](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L146)
  - [Swap Row](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L110)
  - [Transpose](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Matrix/transpose.ts)
  - [Zero Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L95)
- Probability
  - [Combination](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Probability/combination.ts)
  - [Permutation](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Probability/permutation.ts)
  - [Stem and Leaf Plot](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Probability/stemleafplot.ts)
- Helper Functions
  - [Contains String Values](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L33)
  - [Get Dimensions](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L22)
  - [Is Fraction](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L14)
  - [Is Number](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L5)
  - [Is Square Matrix](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L42)
  - [Highest Row Length](https://github.com/MoutPessemier/enhancedMathJS/blob/master/src/Helpers/index.ts#L52)

<hr>

### Usage

Start by importing the main object into your document

```js
import EM from 'enhancedmath';
```

Every single method is added onto this object, treat it a bit like the built-in `Math` object. Some methods are divided into further object, so search through the object for what you need.

##### Examples

###### Factorial

```js
import EM from 'enhancedmath';

const f = EM.factorial(10);
console.log(f);
```

###### Algebra - Discriminator

```js
import EM from 'enhancedmath';

const d = EM.algebra.discriminator(2, 9, -1);
if (d < 0) {
  console.log('...');
} else if (d === 0) {
  console.log('...');
} else {
  console.log('...');
}
```

###### Algebra - Bisection

Depending on the range of the starting interval, you will find different intersection points

```js
import EM from 'enhancedmath';

let result = EM.algebra.intersectionPoints.bisection(-2, 0, 0.001, (x: number) => x * x - 1);
console.log(result);
result = EM.algebra.intersectionPoints.bisection(0, 2, 0.001, (x: number) => x * x - 1);
console.log(result);
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

###### Matrix - Swap Row

```js
import EM from 'enhancedmath';

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const swappedMatrix = EM.matrix.mutations.swapRow(matrix, 0, 2);
console.log(swappedMatrix);
```

###### Probability - Stem and leaf plot

```js
import EM from 'enhancedmath';

const data = [8, 12, 23, 9, 102, 7, 87, 68, 83, 25, 19, 28];
const plot = EM.probability.stemleafplot(data);
console.log(plot);
```

<hr>

### Developer

Mout Pessemier:

- [Twitter](https://twitter.com/MoutPessemier)
- [LinkedIn](https://www.linkedin.com/in/moutpessemier/)

#### Buy me a coffee

If you like this package, consider buying me a coffee. It will help me to keep this package up to date and create new packages.

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/moutpessemier)

### Contributors

- [reeveng](https://github.com/reeveng)
- [Jef Malfliet](https://github.com/Jef-Malfliet)
- [mxfactorial](https://github.com/mxfactorial)
