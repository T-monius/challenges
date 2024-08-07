import assert from "assert";
import Phrase from "../word_count.js";

describe("Test Phrase class", () => {
  it("Test one word phrase.", () => {
    const phrase = new Phrase("word");
    const stringifiedExpectation = JSON.stringify({ "word": 1 });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("Test a phrae with 1 of each word counts.", () => {
    const phrase = new Phrase("one of each");
    const stringifiedExpectation = JSON.stringify({ "one": 1, "of": 1, "each": 1 });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("Count multiple occurrences.", () => {
    const phrase = new Phrase("one fish two fish red fish blue fish");
    const stringifiedExpectation = JSON.stringify({ "one": 1, "fish": 4, "two": 1, "red": 1, "blue": 1 });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("Count everything just once.", () => {
    const phrase = new Phrase("all the kings horses and all the kings men");
    const stringifiedExpectation = JSON.stringify({
      "all": 2, "the": 2, "kings": 2,
      "horses": 1, "and": 1, "men": 1
    });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("Ignore punctuation.", () => {
    const phrase = new Phrase("car : carpet as java : javascript!!&@$%^&");
    const stringifiedExpectation = JSON.stringify({
      "car": 1, "carpet": 1, "as": 1,
      "java": 1, "javascript": 1
    });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("Handle cramped lists.", () => {
    const phrase = new Phrase("one,two,three");
    const stringifiedExpectation = JSON.stringify({ "one": 1, "two": 1, "three": 1 });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("Handle expanded lists.", () => {
    const phrase = new Phrase("one,\ntwo,\nthree");
    const stringifiedExpectation = JSON.stringify({ "one": 1, "two": 1, "three": 1 });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("Numbers included as words.", () => {
    const phrase = new Phrase("testing, 1, 2 testing");
    const stringifiedExpectation = JSON.stringify({ "testing": 2, "1": 1, "2": 1 });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("Normalize case.", () => {
    const phrase = new Phrase("go Go Go");
    const stringifiedExpectation = JSON.stringify({ "go": 3 });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("To include apostrophes.", () => {
    const phrase = new Phrase("First: don't laugh. Then: don't cry.");
    const stringifiedExpectation = JSON.stringify({
      "first": 1, "don't": 2, "laugh": 1,
      "then": 1, "cry": 1
    });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });

  it("Test exclusion of quotations.", () => {
    const phrase = new Phrase("Joe can't tell between 'large' and large.");
    const stringifiedExpectation = JSON.stringify({
      "joe": 1, "can't": 1, "tell": 1,
      "between": 1, "large": 2, "and": 1
    });
    const stringifiedCountDictionary = JSON.stringify(phrase.wordCount());
    assert.equal(stringifiedExpectation, stringifiedCountDictionary);
  });
});
