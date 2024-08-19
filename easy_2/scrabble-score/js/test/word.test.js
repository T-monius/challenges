import assert from 'assert';
import { Word } from '../index.js';
import utils from '../utils/index.js';

const {
  constants: {
    ScrabbleValues,
  }
} = utils;

describe('Test Word class', () => {
  describe('`constructor`', () => {
    it('Throws an error when attempting to instantiate a null value', () => {
      const err = new Error('Cannot have a null word');
      assert.throws(
        () => { new Word(null) },
        err,
      );
    });
  });

  describe('Test #calculateScore instance method', () => {
    it('Scores an empty string as zero', () => {
      const word = new Word('');
      const scrabbleScore = word.calculateScore(ScrabbleValues);

      assert.equal(scrabbleScore, 0);
    });

    it('Scores whitespace only as zero', () => {
      const word = new Word(' \t\n');
      const scrabbleScore = word.calculateScore(ScrabbleValues);

      assert.equal(scrabbleScore, 0);
    });

    it("Scores a single lowercase letter 'a' as 1", () => {
      const word = new Word('a');
      const scrabbleScore = word.calculateScore(ScrabbleValues);

      assert.equal(scrabbleScore, 1);
    });

    it("Scores a single letter 'f' as 4", () => {
      const word = new Word('f');
      const scrabbleScore = word.calculateScore(ScrabbleValues);

      assert.equal(scrabbleScore, 4);
    });

    it("Scores a six letter word 'street' as 6", () => {
      const word = new Word('street');
      const scrabbleScore = word.calculateScore(ScrabbleValues);

      assert.equal(scrabbleScore, 6);
    });

    it("Scores another six letter word 'quirky' as 22", () => {
      const word = new Word('quirky');
      const scrabbleScore = word.calculateScore(ScrabbleValues);

      assert.equal(scrabbleScore, 22);
    });

    it("Scores the eight letter word 'alacrity' as 13", () => {
      const word = new Word('alacrity');
      const scrabbleScore = word.calculateScore(ScrabbleValues);

      assert.equal(scrabbleScore, 13);
    });

    it("Scores a long uppercase string word 'OXYPHENBUTAZONE' as 41", () => {
      const word = new Word('OXYPHENBUTAZONE');
      const scrabbleScore = word.calculateScore(ScrabbleValues);

      assert.equal(scrabbleScore, 41);
    });
  });
});
