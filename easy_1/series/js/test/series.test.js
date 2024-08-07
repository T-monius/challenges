import assert from "assert";
import Series from "../series.js";

describe("Test Series class", () => {
  describe("Test series '01234'.", () => {
    const series = new Series("01234");

    it("Slices of length: 1.", () => {
      const stringifiedExpectation = JSON.stringify([[0], [1], [2], [3], [4]]);
      const slices = series.slices(1);
      const stringifiedSlices = JSON.stringify(slices);

      assert.equal(stringifiedSlices, stringifiedExpectation);
    });

    it("Slices of length: 2.", () => {
      const stringifiedExpectation = JSON.stringify([[0, 1], [1, 2], [2, 3], [3, 4]]);
      const slices = series.slices(2);
      const stringifiedSlices = JSON.stringify(slices);

      assert.equal(stringifiedSlices, stringifiedExpectation);
    });

    it("Slices of length: 3.", () => {
      const stringifiedExpectation = JSON.stringify([[0, 1, 2], [1, 2, 3], [2, 3, 4]]);
      const slices = series.slices(3);
      const stringifiedSlices = JSON.stringify(slices);

      assert.equal(stringifiedSlices, stringifiedExpectation);
    });

    it("Slices of length: 4.", () => {
      const stringifiedExpectation = JSON.stringify([[0, 1, 2, 3], [1, 2, 3, 4]]);
      const slices = series.slices(4);
      const stringifiedSlices = JSON.stringify(slices);

      assert.equal(stringifiedSlices, stringifiedExpectation);
    });

    it("Slices of length: 5.", () => {
      const stringifiedExpectation = JSON.stringify([[0, 1, 2, 3, 4]]);
      const slices = series.slices(5);
      const stringifiedSlices = JSON.stringify(slices);

      assert.equal(stringifiedSlices, stringifiedExpectation);
    });

    it("Error thrown for 'n' being greater than series length.", () => {
      assert.throws(() => {
        series.slices(6);
      });
    });
  });
});
