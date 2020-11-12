const factorial = require("../functions/factorial");

describe("Factorial", () => {
  test("should return 1 for 0", () => {
    const f = factorial(0);
    expect(f).toBe(1);
  });

  test("should return 1 for 1", () => {
    const f = factorial(1);
    expect(f).toBe(1);
  });

  test("should return 120 for 5", () => {
    const f = factorial(5);
    expect(f).toBe(120);
  });
});
