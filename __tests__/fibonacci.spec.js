const fibonacci = require("../functions/fibonacci");

describe("Fibonnaci", () => {
  test("should return 1 for 0", () => {
    const f = fibonacci(0);
    expect(f).toBe(1);
  });
  test("should return 1 for 1", () => {
    const f = fibonacci(1);
    expect(f).toBe(1);
  });
  test("should return 8 for 5", () => {
    const f = fibonacci(5);
    expect(f).toBe(8);
  });
  test("should return 89 for 10", () => {
    const f = fibonacci(10);
    expect(f).toBe(89);
  });
});
