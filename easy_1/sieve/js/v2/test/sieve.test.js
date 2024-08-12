import assert from 'assert';
import { Sieve } from '../index.js';

describe('Test Sieve class', () => {
  describe('Test #primes instance method', () => {
    it('Primes from 2 to 10...', () => {
      const sieveToTen = new Sieve(10);
      const stringifiedExpectation = JSON.stringify([2, 3, 5, 7]);
      const stringifiedPrimes = JSON.stringify(sieveToTen.primes());

      assert.equal(stringifiedPrimes, stringifiedExpectation);
    });

    it('Primes up to 1000...', () => {
      const sieveTo1000 = new Sieve(1000);
      const stringifiedExpectation = JSON.stringify([
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
        61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127,
        131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191,
        193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257,
        263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331,
        337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401,
        409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467,
        479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563,
        569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631,
        641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709,
        719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797,
        809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877,
        881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967,
        971, 977, 983, 991, 997
      ]);
      const stringifiedPrimes = JSON.stringify(sieveTo1000.primes());

      assert.equal(stringifiedPrimes, stringifiedExpectation);
    });
  });

  describe('Test ::markMultiples class method', () => {
    it('Marks 4, 6 given 2 up to 7', () => {
      const sieve = new Sieve(7);
      const marked = JSON.stringify(Sieve.markMultiples(2, sieve.limit, {}, Sieve.findNextUnMarkedNumber));

      assert.equal(marked, JSON.stringify({ 4:true, 6:true }));
    });
  });

  describe('Test ::findNextMarkedNumber class method', () => {
    it('Returns the number 3 when given num 2 and a map with the number 4 set to true', () => {
      const marked = { 4: true };
      const sieve = new Sieve(4);
      const nextNum = Sieve.findNextUnMarkedNumber(2, sieve.limit, marked);

      assert.equal(nextNum, 3);
    });
  });

  describe('Test ::listUnmarked class method', () => {
    it('Returns a list [2, 3] when passed marked map { 4: true }', () => {
      const marked = { 4: true };
      const sieve = new Sieve(4);
      const list = Sieve.listUnmarked(marked, 2, sieve.limit);

      assert.deepEqual(list, [2,3]);
    });
  });
});