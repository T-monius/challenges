# Scrabble Score

## Problem

Write a program that, given a word, computes the scrabble score for that word.

Letter Values
You'll need these:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

### Understanding

- Input
  - String
    - Word
    - Letters have a 'Scrabble Value'
- Output
  - Integer
    - Score
- Only count alphabetic characters

## Examples / Test Cases

Examples
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

- 3 + 2*1 + 2*3 + 2 + 1
- = 3 + 2 + 6 + 3
- = 5 + 9
- = 14

## Data Structures

- Hash / Dictionary / Object
  - Letters and values
- Array

## Algorithm
### Functional Abstractions

- Map
- Reduce

### Hard Algorithms

1. Instantiate a `Word` class
1.   `constructor` takes a string
1. Define `calculateScore` method
1.   Takes: `valueMap`
1.   Map each letter to value
1.   Reduce values to total
1. Return total
