# Odd Words

## Problem

__Understanding:__
Input
- String
  + Words
    > Max 20 letters
  + Single space separating words
  + Terminated by a point
Output
- String of same length with words at odd indexes reveresed

Task
- Read each character of the string from first index to
  last
- Last character is a '.'
- Push words to a new string
- Copy odd words in reverse

## Examples/Test Cases

```js
let idx = 1;
const sentence = 'whats the matter with kansas anyway?';
//                       ^
//=> 'whats eht matter htiw kansas yawyna?'
```

## Data Structures

- Array

## Algorithm

Reversing odds
1. Split sentence/words by space
1. Transform/map split word
1.   _If_ word idx is odd return reversed _else_ word.
1. Join transormed words with a space
1. Return new sentence

Reverse a word
1. Instantiate a new string `reversed`to push to
1. Instantiate an empty `finalPunctuation` var
1. Iterate word in reverse
1.   If char at first iteration is non-alpha, push to `finalPunctuation` and continue
1.   Push char at iteration to reversed
