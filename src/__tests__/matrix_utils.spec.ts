import {
  generateIdentityMatrix,
  generateZeroMatrix,
  // swapCol,
  // swapElement,
  swapRow,
  multiplyMatrix
  // multiplyRow
} from '../Matrix/utils';

describe('Matrix Utilities', () => {
  test('should return undefined for nagative values - Identity', () => {
    const result = generateIdentityMatrix(-7);
    expect(result).toBeUndefined();
  });

  test('should return undefined for fraction values - Identity', () => {
    const result = generateIdentityMatrix(7 / 10);
    expect(result).toBeUndefined();
  });

  test('should return undefined for non numeric values - Identity', () => {
    //@ts-ignore
    const result = generateIdentityMatrix('hello');
    expect(result).toBeUndefined();
  });

  test('should return a 1x1 matrix for n = 1 - Identity', () => {
    const result = generateIdentityMatrix(1);
    expect(result).toEqual(expect.arrayContaining([[1]]));
  });

  test('should return a 5x5 matrix for n = 5 - Identity', () => {
    const result = generateIdentityMatrix(5);
    expect(result).toEqual(
      expect.arrayContaining([
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1]
      ])
    );
  });

  test('should return undefined for nagative values - Zero', () => {
    const result = generateZeroMatrix(-7);
    expect(result).toBeUndefined();
  });

  test('should return undefined for fraction values - Zero', () => {
    const result = generateZeroMatrix(7 / 10);
    expect(result).toBeUndefined();
  });

  test('should return undefined for non numeric values - Zero', () => {
    //@ts-ignore
    const result = generateZeroMatrix('hello');
    expect(result).toBeUndefined();
  });

  test('should return a 1x1 matrix for n = 1 - Zero', () => {
    const result = generateZeroMatrix(1);
    expect(result).toEqual(expect.arrayContaining([[0]]));
  });

  test('should return a 5x5 matrix for n = 5 - Zero', () => {
    const result = generateZeroMatrix(5);
    expect(result).toEqual(
      expect.arrayContaining([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ])
    );
  });

  test('should return undefined for a row higher than the dimension of the matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    let result = swapRow(matrix, 1, 4);
    expect(result).toBeUndefined();
    result = swapRow(matrix, 4, 1);
    expect(result).toBeUndefined();
    result = swapRow(matrix, -4, 1);
    expect(result).toBeUndefined();
    result = swapRow(matrix, 1, -2);
    expect(result).toBeUndefined();
  });

  test('should return undefined for a non numeric values', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    //@ts-ignore
    let result = swapRow(matrix, 'A', 2);
    expect(result).toBeUndefined();
    //@ts-ignore
    result = swapRow(matrix, 2, 'A');
    expect(result).toBeUndefined();
  });

  // test('should return undefined for a column higher than the dimension of the matrix', () => {
  //   const matrix = [
  //     [1, 2, 3],
  //     [4, 5, 6],
  //     [7, 8, 9]
  //   ];
  //   let result = swapCol(matrix, 1, 4);
  //   expect(result).toBeUndefined();
  //   result = swapCol(matrix, 4, 1);
  //   expect(result).toBeUndefined();
  // });

  // test('should return undefined for a row and a column higher than the dimension of the matrix', () => {
  //   const matrix = [
  //     [1, 2, 3],
  //     [4, 5, 6],
  //     [7, 8, 9]
  //   ];
  //   let result = swapElement(matrix, 1, 2, 3, 5);
  //   expect(result).toBeUndefined();
  //   result = swapElement(matrix, 1, 2, 5, 3);
  //   expect(result).toBeUndefined();
  //   result = swapElement(matrix, 1, 4, 3, 3);
  //   expect(result).toBeUndefined();
  //   result = swapElement(matrix, 4, 2, 3, 3);
  //   expect(result).toBeUndefined();
  //   result = swapElement(matrix, 4, 2, 3, 5);
  //   expect(result).toBeUndefined();
  // });

  test('should swap 2 rows', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = swapRow(matrix, 1, 2);
    expect(result).toEqual(
      expect.arrayContaining([
        [4, 5, 6],
        [1, 2, 3],
        [7, 8, 9]
      ])
    );
  });

  // wip
  // test('should swap 2 columns', () => {
  //   const matrix = [
  //     [1, 2, 3],
  //     [4, 5, 6],
  //     [7, 8, 9]
  //   ];
  //   const result = swapCol(matrix, 0, 1);
  //   expect(result).toEqual(
  //     expect.arrayContaining([
  //       [5, 4, 6],
  //       [2, 1, 3],
  //       [8, 7, 9]
  //     ])
  //   );
  // });

  // wip
  // test('should swap 2 elements', () => {
  //   const matrix = [
  //     [1, 2, 3],
  //     [4, 5, 6],
  //     [7, 8, 9]
  //   ];
  //   const result = swapElement(matrix, 0, 1, 1, 2);
  //   expect(result).toEqual(
  //     expect.arrayContaining([
  //       [1, 6, 3],
  //       [4, 5, 2],
  //       [7, 8, 9]
  //     ])
  //   );
  // });

  test('should return undefined for non numeric values', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    //@ts-ignore
    const result = multiplyMatrix(matrix, 'abc');
    expect(result).toBeUndefined();
  });

  test('should multiply the whole matrix with 2', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = multiplyMatrix(matrix, 2);
    expect(result).toEqual(
      expect.arrayContaining([
        [2, 4, 6],
        [8, 10, 12],
        [14, 16, 18]
      ])
    );
  });
});
