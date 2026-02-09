const { calculateFinalAmount } = require("../src/pricing");

test("Check for invalid coupon", () => {
  expect(() => calculateFinalAmount(100, "!FLAT50")).toThrow("Invalid Coupon");
});

test("Check for invalid coupon", () => {
  expect(() => calculateFinalAmount(100, "!SAVE10")).toThrow("Invalid Coupon");
});

test("Check for no coupon and valid subtotal", () => {
  expect(calculateFinalAmount(100, null)).toBe(100);
});

test("Check for SAVE10 coupon", () => {
  expect(calculateFinalAmount(100, "SAVE10")).toBe(90);
});

test("Check for flat50 percent off", () => {
  expect(calculateFinalAmount(100, "FLAT50")).toBe(50);
});
