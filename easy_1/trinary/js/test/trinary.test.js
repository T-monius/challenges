import assert from 'assert';
import Trinary from '../trinary.js';

describe("Test Trinary class.", () => {
  it("Test trinary 1 is decimal 1", () => {
    const trinary = new Trinary('1');

    assert.equal(1, trinary.toDecimal());
  });

  it("Test trinary 2 is decimal 2", () => {
    const trinary = new Trinary('2');

    assert.equal(2, trinary.toDecimal());
  });

  it("Test trinary 10 is decimal 3", () => {
    const trinary = new Trinary('10');

    assert.equal(3, trinary.toDecimal());
  });

  it("Test trinary 11 is decimal 4", () => {
    const trinary = new Trinary('11');

    assert.equal(4, trinary.toDecimal());
  });

  it("Test trinary 100 is decimal 9", () => {
    const trinary = new Trinary('100');

    assert.equal(9, trinary.toDecimal());
  });

  it("Test trinary 112 is decimal 14", () => {
    const trinary = new Trinary('112');

    assert.equal(14, trinary.toDecimal());
  });

  it("Test trinary 222 is decimal 26", () => {
    const trinary = new Trinary('222');

    assert.equal(26, trinary.toDecimal());
  });

  it("Test trinary 1122000120 is decimal 32091", () => {
    const trinary = new Trinary('1122000120');

    assert.equal(32091, trinary.toDecimal());
  });

  it("Test invalid trinary is decimal 0", () => {
    const trinary = new Trinary('carrot');
    const isZero = 0 == trinary.toDecimal();

    assert(isZero);
  });

  it("Test invalid trinary with digits is decimal 0", () => {
    const trinary = new Trinary('0a1b2c');
    const isZero = 0 == trinary.toDecimal();

    assert(isZero);
  });
});