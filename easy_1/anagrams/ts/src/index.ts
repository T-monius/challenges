class Anagram {
  word: string;
  constructor(word: string) {
    this.word = word;
  }

  match(list: string[]): string[] {
    const sortedWord: string = this.word
      .split('')
      .sort()
      .join('');
    const anagrams: string[] = list.filter((potentialAnagram: string) => {
      const sortedPA: string = potentialAnagram
        .split('')
        .sort()
        .join('');
      return sortedPA === sortedWord;
    });
    return anagrams;
  }
};

export { Anagram };
