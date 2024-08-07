import assert from "assert";
import PerfectNumber from "../perfect_number.js";

describe("Test 'classify' static method of PerfectNumber class", () => {
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