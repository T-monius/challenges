// sumOfMultiples.js

class SumOfMultiples {
  constructor(...numberSet) {
    numberSet.length === 0 ? this.numberSet = [3, 5] : this.numberSet = numberSet;
  }

  to(target) {
    let sum = 0;

    for(let idx = 1; idx < target; idx += 1) {
      if (this.isMultiple(idx)) {
          sum += idx;
      }
    }
    return sum;
  }

  isMultiple(num) {
    return this.numberSet.some( (setNumber) => num % setNumber === 0 );
  }

  static to(target) {
    const set = new SumOfMultiples();
    return set.to(target);
  }
}

export default SumOfMultiples;