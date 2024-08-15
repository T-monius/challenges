# Beer Song

## Problem

- Write a program that can generate the lyrics of the 99 Bottles of Beer song. See the test suite for the entire song.
- 2 phrases
  - Interpolated numbers
  - Decrement downto zero inclusive
- `BeerSong` class
  - `new`
    - Instantiates new song
    - Create all verses?
  - `verse`
    - One argument
    - Instance method
    - Access a given verse
      - Set of 2 phrases
      - Return
  - `verses`
    - 2 arguments
      - Starting verse
      - Ending verse
    - Return a 'slice' / range of verses
  - `lyrics`
    - Return the whole song

__Understanding__

The song repeats a two phrase verse up to 100 times (99 + 1)
- Verses for bottles 2-99 have plural 'bottle(s)'
- Verse one has singular 'bottle'
- Verse zero plural 'bottle(s)' preceeded by non-numeric phrase

`BeerSong` class
- Instantiate a beer song w/ number verse corresponding to a bottle number

Test Suite
- Tests `verse` instance method, `verses`, or `lyrics` (for whole song/all verses)

## Examples/Test Cases

```js
const verseOne = beerSong.verse(99)
/*
=> "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n";
*/
```

## Data Structures

- Array

## Algorithm

- Define `constructor`
  - Set input as an instance variable
- Define `phraseOnePrefix` and `phraseOneSuffix`, etc. for components of song as constants
- Define static class getter for verse composition
- Define `#verse`
  - Use switch, etc. to determine bottle count
  - Interpolate bottle count into verse and return
- Define `#verses`
  - ...
