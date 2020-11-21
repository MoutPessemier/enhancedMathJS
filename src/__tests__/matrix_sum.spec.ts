import matrix_sum from '../Matrix/matrix_sum';

describe('Matrix: Sum', () => {
  test("should return undefined if dimensions aren't the same", () => {
    const A = [[1, 2], [3, 4]];
    const B = [[5, 6]];
    const C = [[7], [8]];

    let result = matrix_sum(A, B);
    expect(result).toBeUndefined();
    result = matrix_sum(A, C);
    expect(result).toBeUndefined();
    result = matrix_sum(C, B);
    expect(result).toBeUndefined();
  });

  test('should calulate the sum of A and B for 1x1', () => {
    const A = [[1]];
    const B = [[2]];
    const result = matrix_sum(A, B);
    expect(result).toEqual(expect.arrayContaining([[3]]));
  });

  test('should calulate the sum of A and B for 2x2', () => {
    const A = [[1, 2], [3, 4]];
    const B = [[5, 6], [7, 8]];
    const result = matrix_sum(A, B);
    expect(result).toEqual(expect.arrayContaining([[6, 8], [10, 12]]));
  });

  test('should calulate the sum of A and B for 4x3', () => {
    const A = [[1, 2, 3], [3, 4, 5], [4, 5, 6], [6, 7, 8]];
    const B = [[3, 2, 1], [5, 4, 3], [6, 5, 4], [8, 7, 6]];
    const result = matrix_sum(A, B);
    expect(result).toEqual(expect.arrayContaining([[4, 4, 4], [8, 8, 8], [10, 10, 10], [14, 14, 14]]));
  });

  test('should calulate the sum of A and B for 2x3', () => {
    const A = [[1, 2, 5], [3, 4, 6]];
    const B = [[3, 9, 5], [4, 0, 1]];
    const result = matrix_sum(A, B);
    expect(result).toEqual(expect.arrayContaining([[4, 11, 10], [7, 4, 7]]));
  });
});
