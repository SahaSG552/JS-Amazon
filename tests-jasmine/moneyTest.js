import { formatCurrency } from "../scripts/utils/money.js";

describe("test suite: formatCurrency", () => {
  it("converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });

  it("works with zero", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("works with decimals", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.55)).toEqual("20.06");
  })
});
