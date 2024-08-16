export default class OddWords {
  constructor(sentence) {
    this.sentence = sentence;
  }

  reverse() {
    const words = this.sentence.split(' ');
    const oddsReversed = words.map((word, idx) => {
      return idx % 2 === 0 ? word : OddWords.reverseWord(word);
    });

    return oddsReversed.join(' ');
  }

  static reverseWord(word) {
    const lastIdx = word.length - 1;
    let finalPunctuation = '';
    let reversed = '';
    for(let idx = lastIdx; idx > -1; idx -= 1) {
      const char = word[idx];
      if (idx === lastIdx && !OddWords.isAlpha(char)) {
        finalPunctuation = char;
        continue;
      }
      reversed += char;
    }

    return reversed + finalPunctuation;
  }

  static isAlpha(char) {
    const alphaRegExp = new RegExp(/[a-zA-Z]/);
    const alphaness = alphaRegExp.test(char);

    return alphaness;
  }
};
