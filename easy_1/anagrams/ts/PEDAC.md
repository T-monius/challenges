# Anagrams

## Problem

- Write a program that, given a word and a list of possible anagrams, selects the correct sublist that contains the anagrams of the word.

- For example, given the word "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets". Please read the test suite for exact rules of anagrams.

- Input
  - Two arguments
    1. word
    2. list of possible anagrams (other words)
- Output
  - Array
    - anagrams
      - Anagram: word that is the same length as another word and has the same count of each character

## Understanding

- Sorting words and comparing their equality determines status as an anagram
- Exclude identical words
- Case sensitive

## Examples / Test Cases

```ts
const word: string = 'ant';
const potentialAnagrams: string[] = ['tan', 'stand', 'at'];
//                                     ^
// 'ant' <=> 'tan'
// word sorted => 'ant'
// target sorted => 'ant' AND equals word
```

## Data Structures

- Array

## Algorithm

__Functional abstractions__

- Sort
- Filter

__Breakdown__

1. Split `word` input and sort
1. Iterate over/filter list of `potentialAnagrams`
1.   Split and sort target word at iteration
1.   Conditionally return true if sorted version of target word is equal to input word sorted
1. Return filtered list
