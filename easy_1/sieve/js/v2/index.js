class Sieve {
  constructor(limit) {
    this.limit = limit;
  }

  primes() {
    const marked = Sieve.markMultiples(2, this.limit, {}, Sieve.findNextUnMarkedNumber);
    const primes = Sieve.listUnmarked(marked, 2, this.limit);
    return primes;
  }

  static markMultiples(from, to, marked, findNextUnMarkedNumber) {
    for(let num = from; num < Math.round(to / 2); num = findNextUnMarkedNumber(num, to, marked)) {
      let multiplier = 1;
      let multiple = num;
      while (multiple <= to) {
        multiplier += 1;
        multiple = num * multiplier;
        if(multiple <= to) { marked[multiple] = true };
      }
    }
    return marked;
  }

  static findNextUnMarkedNumber(currentNum, to, marked) {
    let nextNum = currentNum + 1;
    while (nextNum < to) {
      if (!marked[nextNum]) { break }
      nextNum += 1;
    }
    return nextNum;
  }

  static listUnmarked(marked, from, upTo) {
    const primes = [];
    for(let num = from; num <= upTo; num += 1) {
      if(!marked[num]) { primes.push(num) }
    }
    return primes;
  }
}

export { Sieve };
