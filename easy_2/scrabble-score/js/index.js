class Word {
  constructor(word) {
    if(word === null) { throw new Error('Cannot have a null word')}

    this.word = word;
  }

  calculateScore(valueMap) {
    const score = this.word
      .toUpperCase()
      .split('')
      .map( (char) => valueMap[char] || 0 )
      .reduce(
        (acc, val) =>  acc + val,
         0,
      );

    return score;
  }
};

export { Word };
