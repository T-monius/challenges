# Odd Words

## Problem

- Consider a character set consisting of letters, a space, and a point. Words consitst of one or more, but at most 20 letters. An input text consists of one or more words separated from each other by one or more spaces and terminated by 0 or more spaces followed by a point. Input should be read from, and including, the first letter of the first word, up to an including the terminating point. The output text is to be produced such that successive words are separated by a single space with the last word being terminated by a single point. Odd words are copied in reverse order while even words are merely echoed. For example, the input string:

"whats the matter with kansas." becomes -> "whats eht matter htiw kansas."

BONUS POINTS: the characters must be read and printed one at a time.

### Understanding

- Input
  - String
    - 1+ words
      - 1 to 20 1etters
      - Space separated (1+ spaces)
    - Ended by a dot
      - Can be preceded by a space
- Output
  - String
    - Space separated words
      - Single spaces
      - No space preceding end dot
    - Odd words reversed

## Examples / Test Cases

```ruby

str = "whats the matter with kansas."
      ['whats', 'the', 'matter', 'with', 'kansas.'] # split on space
      ['whats', 'eht', 'matter', 'htiw', 'kansas'] # regex mathing
#                                                  ^
#=> result of joining with a space and adding a dot "whate eht matter htiw kansas."

str1 = "whats the matter with kansas."
#                                   ^

word_count = 3
idx = 0
modified_str = 'whats eht matter htiw kansas.'

str2 = "whats the matter  with kansas ." #=> "whate eht matter htiw kansas."
str3 = " whats  the matter with kansas."
#                  ^

word_count = 1
idx = 11
modified_str = 'whats eht'
```

## Data Structures

- Pointer
- String

## Algorithm

- Declare variables
  - `idx`
  - `modified_str`
- Iterate over the string while `idx` is shorter thant the length of the string input
  - If character at iteration is alpha && `word_count` is even
    - while character at iteration is alpha
      - Push the character to `modified_str`
      - increment idx
    - Increment `word_count`
  - Elsif its a space && `word_count` is greater than `0`
    - Push a single space to the `modified_str`
    - Increment `idx` until the character is not a space
  - Elsif alpha and `word_count` is odd
    - increment `idx` until character is not alpha
    - Decrement the `idx`
    - While the character at iteration is a alpha
      - Push to `modified_str`
      - Decrement `idx`
    - increment `idx` until character is not alpha
  - Else
    - Increment `idx`
- Push a dot
- Return `modified_str`
