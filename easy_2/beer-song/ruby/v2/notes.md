# Beer Song

## Understanding

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

## Data Structures

- String

## Algorithm

- Store 2 phrases as constant variables
- `initialize`
  - empty
- `verse`
  - Interpolate argument into the first phrase
  - Interpolate argument minus 1 into second phrase
  - Special cases
    - 2
    - 1
    - Zero
    - Exception for less than 0?
  - Output both concatenated with a newline
- `verses`
  - Iterate from arg1 to arg2
    - Call `verse` at each iteration
    - Concatenate the return of `verse` to a return string
- `lyrics`
  - Call `verses` with 99 to 1
