export default class BeerSong {
  constructor() {
    this.phraseOne = "$ bottles of beer on the wall, $ bottles of beer.\n";
    this.phraseTwo = "Take one down and pass it around, $ bottles of beer on the wall.\n";
  }
  verse(num) {
    if (num < 0) { return 'You so baaadd!! That aint done with this song.' }
    let songVerse;
    switch(num) {
      case 0:
        songVerse = "No more bottles of beer on the wall, no more bottles of beer.\n" +
                    "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        break;
      case 1:
        songVerse = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
                    "Take it down and pass it around, no more bottles of beer on the wall.\n";
        break;
      case 2:
        songVerse = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
                    "Take one down and pass it around, 1 bottle of beer on the wall.\n";
        break;
      default:
        songVerse = this.phraseOne.replace(/[$]/g, num);
        songVerse = songVerse.concat(this.phraseTwo.replace("$", num - 1))
    }
    return songVerse;
  }

  verses(firstVerse, lastVerse) {
    let excerpt = this.verse(firstVerse);

    for (let nextVerse = firstVerse - 1; nextVerse >= lastVerse; nextVerse -= 1) {
      excerpt += ("\n" + this.verse(nextVerse));
    }
    return excerpt;
  }

  lyrics() {
    return this.verses(99, 0);
  }
}
