import transpose from '../Matrix/transpose';

describe('transpose', () => {
  it('should return the same element for a 1x1 matrix', () => {
    const matrix = [[1]];
    const tMap = transpose(matrix);
    expect(tMap).toEqual([[1]]);
  });

  it('should return the same element for a 1x2 matrix', () => {
    const matrix = [[1, 2]];
    const tMap = transpose(matrix);
    expect(tMap).toEqual([[1], [2]]);
  });

  it('should return the same element for a 2x1 matrix', () => {
    const matrix = [[1], [2]];
    const tMap = transpose(matrix);
    expect(tMap).toEqual([[1, 2]]);
  });

  it('should return the transpose for a 2x2 matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ];
    const tMap = transpose(matrix);
    expect(tMap).toEqual([
      [1, 3],
      [2, 4]
    ]);
  });

  it('should return the transpose for a 2x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    const tMap = transpose(matrix);
    expect(tMap).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it('should return the transpose for a 2x3 matrix', () => {
    const matrix = [
      [1, 4],
      [2, 5],
      [3, 6]
    ];
    const tMap = transpose(matrix);
    expect(tMap).toEqual([
      [1, 2, 3],
      [4, 5, 6]
    ]);
  });

  it('transpose of an array with an empty row should return the transposed array with null values for that row', () => {
    const matrix = [[], [1, 2, 3]];
    const tMap = transpose(matrix);
    expect(tMap).toEqual([
      [null, 1],
      [null, 2],
      [null, 3]
    ]);
  });
});
