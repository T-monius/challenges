import assert from "assert";
import DNA from "../point_mutations.js";

describe("Test DNA class.", () => {
  it("Test no difference between empty strands.", () => {
    const strand = new DNA("");
    const isZero = strand.hammingDistance("") === 0;
    assert(isZero);
  });

  it("Test no difference between identical strands.", () => {
    const strand = new DNA("GGACTGA");
    const isZero = strand.hammingDistance("GGACTGA") === 0;
    assert(isZero);
  });

  it("Short strings that are completely different.", () => {
    const strand = new DNA("ACT");
    assert.equal(3, strand.hammingDistance("GGA"));
  });

  it("Long off by one strand.", () => {
    const strand = new DNA("GGACGGATTCTGACCTGGACTAATTTTGGGG");
    const distance = "AGGACGGATTCTGACCTGGACTAATTTTGGGG";
    assert.equal(19, strand.hammingDistance(distance));
  });

  it("Small hamming distance in middle somewhere.", () => {
    const strand = new DNA("GGACG");
    assert.equal(1, strand.hammingDistance("GGTCG"));
  });

  it("Distance of 2 in medium size strand.", () => {
    const strand = new DNA("ACCAGGG");
    assert.equal(2, strand.hammingDistance("ACTATGG"));
  });

  it("Only compare up to length of shorter strand when other is longer.", () => {
    const strand = new DNA("AAACTAGGGG");
    assert.equal(3, strand.hammingDistance("AGGCTAGCGGTAGGAC"));
  });

  it("Only compare up to length of shorter strand when original is longer.", () => {
    const strand = new DNA("GACTACGGACAGGGTAGGGAAT");
    assert.equal(5, strand.hammingDistance("GACATCGCACACC"));
  });

  it("Original string is not actually shortened.", () => {
    const strand = new DNA("AGACAACAGCCAGCCGCCGGATT");
    assert.equal(1, strand.hammingDistance("AGGCAA"));
    assert.equal(4, strand.hammingDistance("AGACATCTTTCAGCCGCCGGATTAGGCAA"));
    assert.equal(1, strand.hammingDistance("AGG"));
  });
});
