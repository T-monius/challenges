import assert from 'assert';
import { Anagram } from '../index.js';

describe('Test Anagram class...', () => {
  describe('Test #match instance method', () => {
    it('An empty array is returned when there are no matches.', () => {
      const detector = new Anagram('diaper');
      const anagrams = detector.match(['hello', 'world', 'zombies', 'pants']);
      const isZero = anagrams.length === 0;
  
      assert(isZero);
    });
  
    it('Detect a single match for a simple anagram.', () => {
      const detector = new Anagram('ant');
      const anagrams = detector.match(['tan', 'stand', 'at']);
      const stringifiedAnagrams = JSON.stringify(anagrams.sort());
      const stringifiedExpectation = JSON.stringify(['tan']);
      assert.equal(stringifiedExpectation, stringifiedAnagrams);
    });
  
    it('Detect a multiple anagrams.', () => {
      const detector = new Anagram('master');
      const anagrams = detector.match(['stream', 'pigeon', 'maters']);
      const stringifiedAnagrams = JSON.stringify(anagrams.sort());
      const stringifiedExpectation = JSON.stringify(['maters', 'stream'].sort());
      assert.equal(stringifiedExpectation, stringifiedAnagrams);
    });
  
    it('Does not confuse different duplicate letters.', () => {
      const detector = new Anagram('galea');
      const anagrams = detector.match(['eagle']);
      const isZero = anagrams.length === 0;
      assert(isZero);
    });
  
    it('Identical word is not an angagram.', () => {
      const detector = new Anagram('corn');
      const anagrams = detector.match(['corn', 'dark', 'Corn', 'rank', 'cron', 'park']);
      const stringifiedAnagrams = JSON.stringify(anagrams.sort());
      const stringifiedExpectation = JSON.stringify(['cron']);
      assert.equal(stringifiedExpectation, stringifiedAnagrams);
    });
  
    it('Words with same checksum but are not anagrams excluded.', () => {
      const detector = new Anagram('mass');
      const anagrams = detector.match(['last']);
      const isZero = anagrams.length === 0;
      assert(isZero);
    });
  
    it('Full word and not just subset to be an anagram.', () => {
      const detector = new Anagram('good');
      const anagrams = detector.match(['dog', 'goody']);
      const isZero = anagrams.length === 0;
      assert(isZero);
    });
  
    it('Detect anagram.', () => {
      const detector = new Anagram('listen');
      const anagrams = detector.match(['enlists', 'google', 'inlets', 'banana']);
      const stringifiedAnagrams = JSON.stringify(anagrams.sort());
      const stringifiedExpectation = JSON.stringify(['inlets']);
      assert.equal(stringifiedExpectation, stringifiedAnagrams);
    });
  
    it('Detect a multiple anagrams again.', () => {
      const detector = new Anagram('allergy');
      const anagrams = detector.match([
        'gallery',
        'ballerina',
        'regally',
        'clergy',
        'largely',
        'leading'
      ]);
      const stringifiedAnagrams = JSON.stringify(anagrams.sort());
      const stringifiedExpectation = JSON.stringify(['gallery', 'largely', 'regally'].sort());
      assert.equal(stringifiedExpectation, stringifiedAnagrams);
    });
  
    it('Anagrams are case insensitive.', () => {
      const detector = new Anagram('Orchestra');
      const anagrams = detector.match(['cashregister', 'Carthorse', 'radishes']);
      const stringifiedAnagrams = JSON.stringify(anagrams.sort());
      const stringifiedExpectation = JSON.stringify(['Carthorse']);
      assert.equal(stringifiedExpectation, stringifiedAnagrams);
    });
  });

  describe('Test ::sortStr static method', () => {
    it('Sorts a string of alpha characters', () => {
      const str = 'tan';
      const sorted = Anagram.sortStr(str);

      assert.equal(sorted, 'ant');
    });

    it('Sorts a string of alphanumeric characters', () => {
      const str = 'tan1';
      const sorted = Anagram.sortStr(str);

      assert.equal(sorted, '1ant');
    });

    it('Sorts a string of alphanumeric and special characters', () => {
      const str = 'ta*n1';
      const sorted = Anagram.sortStr(str);

      assert.equal(sorted, '*1ant');
    });
  });
});
