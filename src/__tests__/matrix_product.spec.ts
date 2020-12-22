import matrix_product from '../Matrix/matrix_product';

describe('Matrix: Product', () => {
  test("should return undefined if dimensions aren't lining up", () => {
    const A = [
      [1, 2],
      [3, 4]
    ];
    const B = [[5, 6, 3]];
    const C = [[7], [8], [4]];

    let result = matrix_product(A, B);
    expect(result).toBeUndefined();
    result = matrix_product(A, C);
    expect(result).toBeUndefined();
  });

  test('should return 2x2 for 2 2x2 matrices', () => {
    const A = [
      [1, 2],
      [3, 4]
    ];
    const B = [
      [1, 0],
      [0, 1]
    ];
    let result = matrix_product(A, B);
    expect(result).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  test('should return 2x4 for a 2x3 and a 3x4 matrices', () => {
    const A = [
      [1, 2, 3],
      [3, 4, 5]
    ];
    const B = [
      [1, 0, 5, 8],
      [0, 1, 0, 6],
      [1, 5, 8, 4]
    ];
    let result = matrix_product(A, B);
    expect(result).toEqual([
      [4, 17, 29, 32],
      [8, 29, 55, 68]
    ]);
  });

  test('should return 3x3 for a 3x2 and a 2x3 matrices', () => {
    const A = [
      [1, 2],
      [3, 4],
      [3, 8]
    ];
    const B = [
      [1, 0, 5],
      [0, 1, 0]
    ];
    let result = matrix_product(A, B);
    expect(result).toEqual([
      [1, 2, 5],
      [3, 4, 15],
      [3, 8, 15]
    ]);
  });
});
