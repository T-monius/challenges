import { Anagram } from '../index';

describe('Test Anagram class...', () => {
  test('Detect a single match for a simple anagram.', () => {
    const detector = new Anagram('ant');
    const anagrams = detector.match(['tan', 'stand', 'at']);
    const sortedAnagrams = anagrams.sort();

    expect(sortedAnagrams).toEqual(['tan']);
  });
});
