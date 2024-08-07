class PerfectNumber {
  static classify(num) {
    if (num < 1) { throw new Error("Invalid number") }
    const factors = PerfectNumber.getFactors(num);
    const sum = PerfectNumber.sumFactors(factors);
    
    let classification = 'perfect';
    if (sum > num) { classification = 'abundant' }
    if (sum < num) { classification = 'deficient' }
    
    return classification;
  }
  
  static getFactors(num) {
    const factors = [];
    
    for(let c = 1; c <= (num / 2); c += 1) {
      const dividend = num / c;
      if (dividend % 1 == 0) { factors.push(c) }
    }
    
    return factors;
  }
  
  static sumFactors(factors) {
    const sum = factors.reduce((acc, n) => {
      return acc + n
    }, 0);

    return sum;
  }
}

export { PerfectNumber }
