import utils from "./utils/index.js";

const { 
  constants: {
    phraseOnePrefix,
    phraseOneSuffix,
    phraseTwoPrefix,
    phraseTwoMiddle,
    phraseTwoSuffix,
    noBottlePhrase,
    lastVersePhraseTwoPrefix,
  }
} = utils;

class BeerSong {
  static verse(ithVerse) {
    const phraseParts = BeerSong.phraseParts(ithVerse);
    const fillers = BeerSong.fillers(ithVerse);
    let verse = '';
    for(let i = 0; i < phraseParts.length; i += 1) {
      let filler = fillers[i];
      const phrasePart = phraseParts[i];
      if (
        (ithVerse === 1 && i === 3) ||
        (ithVerse === 0 && i === 1)
      ) {
        filler = filler.toLowerCase()
      }

      verse += filler + phrasePart;
    }

    return verse;
  }

  // ::verses(from: int, to: int) return string; Output verses from a given verse to another inclusive
  static verses(from, to) {
    if (from < to) { throw new Error('From verse must be greater than to verse') }

    let verses = '';
    for(let i = from; i >= to; i -= 1) {
      const verse = `${BeerSong.verse(i)}${i > to ? '\n' : ''}`;
      verses += verse;
    }

    return verses;
  }

  static lyrics() {
    const wholeSong = BeerSong.verses(99, 0);

    return wholeSong;
  }

  static bottleCount(bottle) {
    const plurality = bottle !== 1 ? 's': '';
    const bottlePrefix = bottle === 0 ? noBottlePhrase : bottle;
    const bottleCount = `${bottlePrefix} bottle${plurality}`;

    return bottleCount;
  }

  static fillers(ithVerse) {
    const emptyString = '';
    const currentBottleCount = BeerSong.bottleCount(ithVerse);
    const nextBottleCount = ithVerse === 0 ? BeerSong.bottleCount(99) : BeerSong.bottleCount(ithVerse - 1);
    const fillers = [
      currentBottleCount,
      currentBottleCount,
      emptyString,
      nextBottleCount,
    ];

    return fillers;
  }

  static phraseTwoPrefixDeterminer(ithVerse) {
    if (ithVerse === 0) { return lastVersePhraseTwoPrefix }

    let filler = ithVerse === 1 ? 'it' : 'one';
    const prefix = `${phraseTwoPrefix} ${filler} ${phraseTwoMiddle}`;

    return prefix;
  }

  static phraseParts(ithVerse) {
    const fullPhraseTwoPrefix = BeerSong.phraseTwoPrefixDeterminer(ithVerse);

    return [phraseOnePrefix, phraseOneSuffix, fullPhraseTwoPrefix, phraseTwoSuffix];
  }
};

export { BeerSong };
