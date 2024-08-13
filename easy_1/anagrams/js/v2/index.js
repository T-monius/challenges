class Anagram {
  constructor(str) {
    this.base = str;
  }

  match(words) {
    const target = Anagram.sortStr(this.base.toLowerCase());

    const anagrams = words.filter( (word) => {
      const sortedWord = Anagram.sortStr(word.toLowerCase());
      const isAnAnagram = word.toLowerCase() != this.base.toLowerCase()
        && sortedWord === target;

      return isAnAnagram;
    });
    
    return anagrams;
  }
  
  static sortStr(word) {
    const sorted = word
      .split('')
      .sort()
      .join('');

    return sorted;
  }
};

export { Anagram };
