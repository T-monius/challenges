class Phrase {
  constructor(inputPhrase) {
    this.phrase = inputPhrase;
  }

  wordCount() {
    return this.phrase
    .toLowerCase()
    .match(/\b[\w]+'?[\w]?\b/ig)
    .reduce( (wordCounts, word) => {
      wordCounts[word] ? wordCounts[word] += 1 : wordCounts[word] = 1;
      return wordCounts;
    }, {});
  }
}

export default Phrase;