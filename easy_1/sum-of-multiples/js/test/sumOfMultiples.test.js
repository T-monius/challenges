import assert from 'assert';
import SumOfMultiples from '../sumOfMultiples.js';

describe('Test SumOfMultiples class...', () => {
  it('Sum from 1 up to 1 should equal zero.', () => {
    const isZero = SumOfMultiples.to(1) === 0;
    assert(isZero);
  });

  it('Sum up to 4 exclusive is 3.', () => {
    assert.equal(3, SumOfMultiples.to(4));
  });

  it('Sum up to 10 is 23.', () => {
    assert.equal(23, SumOfMultiples.to(10));
  });

  it('Sum up to 100 is 2318.', () => {
    assert.equal(2318, SumOfMultiples.to(100));
  });

  it('Sum up to 1000 is 233,168.', () => {
    assert.equal(233168, SumOfMultiples.to(1000));
  });

  it('Multiples of "7, 13, 17" up to 20 should sum to 51.', () => {
    const set = new SumOfMultiples(7, 13, 17);
    assert.equal(51, set.to(20));
  });

  it('Multiples of "4, 6" up to 15 should sum to 30.', () => {
    const set = new SumOfMultiples(4, 6);
    assert.equal(30, set.to(15));
  });

  it('Multiples of "5, 6, 8" up to 150 should sum to 4419.', () => {
    const set = new SumOfMultiples(5, 6, 8);
    assert.equal(4419, set.to(150));
  });

  it('Multiples of "43, 47" up to 10000 should sum to 2,203,160.', () => {
    const set = new SumOfMultiples(43, 47);
    assert.equal(2203160, set.to(10000));
  });
});