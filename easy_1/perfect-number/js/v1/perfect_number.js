class PerfectNumber {
  static classify(num) {
    if (num < 1) throw new Error('Invalid number');

    const factors = PerfectNumber.getFactors(num);
    const sum = factors.reduce( (acc, int) => acc + int);

    if (sum === num) { return "perfect" }
    if (sum > num) { return "abundant" }
    return "deficient";
  }

  static getFactors(num) {
    const limit = Math.floor(num / 2);
    const factors = [];

    for(let idx = 1; idx <= limit; idx += 1) {
      if (num % idx === 0) {
        factors.push(idx)
      }
    }

    return factors;
  }
}

export default PerfectNumber;