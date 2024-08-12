// sieve.js

class Sieve {
  constructor(limit) {
    this.limit = limit;
    this.sieve = this.createRangeFromTwoToLimitInclusive(limit);
  }

  createRangeFromTwoToLimitInclusive(limit) {
    const range = [];
    let n = 2;

    while (n <= limit) {
      range.push(n);
      n += 1;
    }

    return range;
  }

  primes() {
    const primesArray = [];
    const mockSieve = [null, null].concat(this.sieve);
    let idx = 2;

    while (idx < this.limit) {
      if (mockSieve[idx]) {
        primesArray.push(idx);
        let multiplier = idx;
        let multiple = idx;
        let innerIdx = 2;

        while (multiple < this.limit) {
          multiple = innerIdx * multiplier;
          mockSieve[multiple] = null;
          innerIdx += 1;
        }
      }

      idx += 1;
    }

    return primesArray;
  }
}

export default Sieve;