import assert from 'assert';
import OddWords from '../index.js'

describe('Test OddWords', () => {
  describe('Test #reverse instance method', () => {
    it('Reverses the odd words in a sentence', () => {
      const sentence = 'whats the matter with kansas?';
      const oddWords = new OddWords(sentence);
      const reversed = oddWords.reverse();

      assert.equal(reversed, 'whats eht matter htiw kansas?');
    });
    it('Maintains puncuations', () => {
      const sentence = 'whats the matter with kansas anyway?';
      const oddWords = new OddWords(sentence);
      const reversed = oddWords.reverse();

      assert.equal(reversed, 'whats eht matter htiw kansas yawyna?');
    });
    xit('Squashes multiple contiguous spaces', () => {
      const sentence = 'whats  the matter with kansas anyway?';
      const oddWords = new OddWords(sentence);
      const reversed = oddWords.reverse();

      assert.equal(reversed, 'whats eht matter htiw kansas yawyna?');
    });
    xit('Squashes a leading space', () => {
      const sentence = ' whats the matter with kansas anyway?';
      const oddWords = new OddWords(sentence);
      const reversed = oddWords.reverse();

      assert.equal(reversed, 'whats eht matter htiw kansas yawyna?');
    });
  });
  describe('Test ::reverseWord static method', () => {
    it('Reverses the characters in a string of all alphas', () => {
      const word = 'word';
      const reversed = OddWords.reverseWord(word);

      assert.equal(reversed, 'drow');
    });
    it('Reverses punctuation between characters (i.e. an apostrophe)', () => {
      const word = "what's";
      const reversed = OddWords.reverseWord(word);

      assert.equal(reversed, "s'tahw");
    });
    it('Maintains puntuation at final position', () => {
      const word = "hat.";
      const reversed = OddWords.reverseWord(word);

      assert.equal(reversed, "tah.");
    });
  });
  describe('Test ::isAlpha static method', () => {
    it("Asserts the letter 'a' is an alpa", () => {
      const alphaRegex = /[a-zA-Z]/;
      const alpha = 'a';
      const isAlpha = OddWords.isAlpha(alpha);
  
      assert(isAlpha); 
    });
    it("Asserts the string digit '1' is not alpa", () => {
      const notAlpha = '1';
      const isAlpha = OddWords.isAlpha(notAlpha);
  
      assert(!isAlpha); 
    });
  });
});
