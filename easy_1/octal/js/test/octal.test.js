import assert from 'assert';
import Octal from '../octal.js';

describe('Test Octal', () => {
  it('Test octal 1 is decimal 1...', () => {
    const octal = new Octal('1');

    assert.equal(1, octal.toDecimal());
  });

  it('Test octal 10 is decimal 8...', () => {
    const octal = new Octal('10');

    assert.equal(8, octal.toDecimal());
  });

  it('Test octal 17 is decimal 15...', () => {
    const octal = new Octal('17');

    assert.equal(15, octal.toDecimal());
  });

  it('Test octal 11 is decimal 9...', () => {
    const octal = new Octal('11');

    assert.equal(9, octal.toDecimal());
  });

  it('Test octal 130 is decimal 88...', () => {
    const octal = new Octal('130');

    assert.equal(88, octal.toDecimal());
  });

  it('Test octal 2047 is decimal 1063...', () => {
    const octal = new Octal('2047');

    assert.equal(1063, octal.toDecimal());
  });

  it('Test octal 7777 is decimal 4095...', () => {
    const octal = new Octal('7777');

    assert.equal(4095, octal.toDecimal());
  });

  it('Test octal 1234567 is decimal 342391...', () => {
    const octal = new Octal('1234567');

    assert.equal(342391, octal.toDecimal());
  });

  it('Test invalid octal is decimal 0...', () => {
    const octal = new Octal('carrot');
    const isZero = octal.toDecimal() == 0;

    assert(isZero);
  });

  it('Test invalid octal is decimal 0...', () => {
    const octal = new Octal('8');
    const isZero = octal.toDecimal() == 0;

    assert(isZero);
  });

  it('Test invalid octal is decimal 0...', () => {
    const octal = new Octal('9');
    const isZero = octal.toDecimal() == 0;

    assert(isZero);
  });

  it('Test invalid octal is decimal 0...', () => {
    const octal = new Octal('6789');
    const isZero = octal.toDecimal() == 0;

    assert(isZero);
  });

  it('Test invalid octal is decimal 0...', () => {
    const octal = new Octal('abc1z');
    const isZero = octal.toDecimal() == 0;

    assert(isZero);
  });

  it('Test invalid octal is decimal 0...', () => {
    const octal = new Octal('234abc');
    const isZero = octal.toDecimal() == 0;

    assert(isZero);
  });

  it('Valid octal formatted string 011 is decimal 9...', () => {
    const octal = new Octal('011');

    assert.equal(9, octal.toDecimal());
  });
});
