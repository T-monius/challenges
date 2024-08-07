import assert from "assert";
import { PerfectNumber } from "../index.js";

describe("Test PerfectNumber class", () => {
  describe("Test 'classify' static method", () => {
    it("Raises an error if input is less than 1", () => {
      const err = new Error("Invalid number");
      assert.throws(() => {
        PerfectNumber.classify(-1)
      }, err);
    });

    it("Classifies a deficient number", () => {
      const str = PerfectNumber.classify(13);
      assert.match(str, /deficient/);
    });

    it("Classifies a perfect number", () => {
      const str = PerfectNumber.classify(28);
      assert.match(str, /perfect/);
    });

    it("Classifies a abundant number", () => {
      const str = PerfectNumber.classify(12);
      assert.match(str, /abundant/);
    });
  });

  describe("Test 'getFactors' static method", () => {
    it("Returns an array of factors for a given whole number", () => {
      const num = 28;
      const factors = PerfectNumber.getFactors(num);

      assert.deepEqual(factors, [ 1, 2, 4, 7, 14 ]);
    })
  });

  describe("Test 'sumFactors' static method", () => {
    it("Sums an array of factors", () => {
      const factors = [ 1, 2, 4, 7, 14 ];
      const sum = PerfectNumber.sumFactors(factors);

      assert.equal(sum, 28);
    })
  });
});
