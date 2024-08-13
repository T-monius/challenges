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
      - Anagram = word that is the same length as another word and has the same count of each character

## Understanding

- Sorting words and comparing their equality determins status as an anagram
- Exclude identical words
- Case sensitive

## Examples / Test Cases
```js
const anagram = 'ant';
const words = ['tan', 'stand', 'at'];
//               ^
```

## Data Structures

- Array

## Algorithm

__Functional abstractions__
- Filter
- Sort

- `Anagram` class
- Constructor
  - Store input as instance variable
- `match`
  - Split `target` word on empty string and sort chars
  - Filter input array
    - At iteration
      - Split current word and sort chars
      - Compare to sorted target
  - Return filtering
