class Anagram {
  constructor(keyWord) {
    this.keyWord = keyWord;
  }

  match(wordList) {
    const lowerCasedKeyWord = this.keyWord.toLowerCase();
    const sortedKeyword = lowerCasedKeyWord.split('').sort().join();

    return wordList.filter( (word) => {
      const lowerCasedWord = word.toLowerCase();
      const isNotWord = lowerCasedWord !== this.keyWord;
      const isAnagram = sortedKeyword === lowerCasedWord.split('').sort().join();
      return isAnagram && isNotWord;
    });
  }
}

export default Anagram;