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
```ruby
word = 'diaper'
list = %(hello world zombiess pants)
anagrams = []

word1 = 'ant'
list = %(tan stand at)
anagrams = ['tan']
```

## Data Structures

- Array

## Algorithm

- `Anagram` class
  - `initialize`
    - store word to test against in an instance variable
    - Takes 1 parameter
  - `match`
    - Takes list as an argument
    - Sort the `key_word` word and store as a variable
      - `sorted_key_word`
    - Select anagrams
      - Word is not the `key_word`
      - Word sorted equals the `sorted_key_word`
