# Roman Numerals

## Problem

The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

```
 1  => I
10  => X
 7  => VII
 ```
There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

To see this in practice, consider the example of 1990. In Roman numerals 1990 is MCMXC:

```
1000=M
900=CM
90=XC
```
2008 is written as MMVIII:

```
2000=MM
8=VIII
```

See also: ![Roman Numerals](http://www.novaroma.org/via_romana/numbers.html 'Roman Numerals')

## Understanding

- Add a `to_roman` intance method to the `Integer` class
  - Convert a decimal number to its roman equivalent
  - Factor off diminishing factors of ten
    - Convert the
      - Thousands
      - Five-hundreds
      - Hundreds
      - Fifties
      - Tens
      - Fives
      - Ones
 - Three consecutive characters can exist
 - Fourth consecutive repeated character is replaced by that character preceding the next largest

## Examples / Test Cases

51

## Data Structures

- Hash / Dictionary

## Algorithm
### Functional Abstractions

- Transformation
- Reduction

### Hard Algorithm

- Create Three hashes
  - Powers of tens
    - Key: power
    - Value: Roman symbol
  - Fifths
    - Key: Power
    - Value: Roman fifth for that power
  - Symbol one greater
- Instantiate a string for return (or reduce)
- For each diminishing order of magnitude from 1000
  - Divide the remaining number by the magnitude at iteration
    - If the result is 1 or greater
      - Convert the floored result into its roman equivalent
        - Each power of 10 has its 'fifth' equivalent
          - I -> V
          - X -> L
          - C -> D
          - M - N/A
        - If the value is 1-3
          - Return the symbol n times
        - If 4
          - Return fifth prepended by symbol
        - If 5
          - Return fifth
        - If 6-8
          - n is modulus of fifth and value
          - Return fitfh with symbol x n appended
        - If 9
          - Return symbol prepended to next greater symbol
      - Append the converted character to return string
  - Modulus off the remiainder
    - Replace current number w/ modulus
  - Divide factor number by 10

```ruby
# Tens -> X
int = 51
factor = 10
value = 5        # 5 / 10 = 5 -> L
roman_str = 'L'
# Ones -> I
int = 1
factor = 1
value = 1
roman_str = 'LI'
# -------------------------------
int = 98
num = 8
factor = 1
value = 8
roman_str = 'CMVIII'
```