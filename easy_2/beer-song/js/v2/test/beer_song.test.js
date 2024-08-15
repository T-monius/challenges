import assert from "assert";
import { BeerSong } from "../index.js";
import utils from "../utils/index.js";

const { constants: { wholeSong }} = utils;

describe('Test Beer Song', ()=> {
  describe('Test ::verse static method.', () => {
    it("Test the first verse.", () => {
      const expectation = "99 bottles of beer on the wall, 99 bottles of beer.\n" +
        "Take one down and pass it around, 98 bottles of beer on the wall.\n";
      const verseOne = BeerSong.verse(99);
      assert.equal(expectation, verseOne);
    });
  
    it("Test another verse.", () => {
      const expectation = "3 bottles of beer on the wall, 3 bottles of beer.\n" +
        "Take one down and pass it around, 2 bottles of beer on the wall.\n";
      const anotherVerse = BeerSong.verse(3);
      assert.equal(expectation, anotherVerse);
    });
  
    it("Test verse 2.", () => {
      const expectation = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
                          "Take one down and pass it around, 1 bottle of beer on the wall.\n";
      const verseTwo = BeerSong.verse(2);
      assert.equal(expectation, verseTwo);
    });
  
    it("Test verse 1.", () => {
      const expectation = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                          "Take it down and pass it around, no more bottles of beer on the wall.\n";
      const verseOne = BeerSong.verse(1);
      assert.equal(expectation, verseOne);
    });
  
    it("Test verse 0.", () => {
      const expectation = "No more bottles of beer on the wall, no more bottles of beer.\n" +
                          "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
      const verseOne = BeerSong.verse(0);
      assert.equal(expectation, verseOne);
    });
  });

  describe("Test a series of verses from BeerSong.", () => {
    describe('Test ::verses static method', () => {
      it("Test throw an error for out of order verses", () => {
        const expectedErr = new Error('From verse must be greater than to verse');

        assert.throws(() => {
          BeerSong.verses(98, 99);
        }, expectedErr);
      });

      it("Test a couple of verses.", () => {
        const expectation = "99 bottles of beer on the wall, 99 bottles of beer.\n" +
                            "Take one down and pass it around, 98 bottles of beer on the wall.\n" +
                            "\n" +
                            "98 bottles of beer on the wall, 98 bottles of beer.\n" +
                            "Take one down and pass it around, 97 bottles of beer on the wall.\n";
        const verses = BeerSong.verses(99, 98);
        assert.equal(expectation, verses);
      });
    
      it("Test last two verses.", () => {
        const expectation = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
                            "Take one down and pass it around, 1 bottle of beer on the wall.\n" +
                            "\n" +
                            "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                            "Take it down and pass it around, no more bottles of beer on the wall.\n" +
                            "\n" +
                            "No more bottles of beer on the wall, no more bottles of beer.\n" +
                            "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        const verses = BeerSong.verses(2, 0);
        assert.equal(expectation, verses);
      });
    });

    describe('Test ::lyrics static method', () => {
      it("Test whole song.", () => {
        const verses = BeerSong.lyrics();

        assert.equal(wholeSong, verses);
      });
    });
  });
});
