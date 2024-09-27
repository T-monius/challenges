# Octal

## Problem

- Octal to decimal conversion
  - Input
    - String
    - Octal
  - Output
    - Decimal
- Constraints
  - Bespoke conversion
  - Invalid input: octal 0
- About
  - Octal: Base-8
  - Decimal: Base-10
    - nth number is multiplied by 10(POW)n-1

### Understanding

- NOTE: this problem would fit well a 'reduce' (reverse the string and reduce),
        but since there is no `reduce_right` like in JS, this is more
        performant.
- Digits > 7 are invalid (i.e. 8, 9)

## Examples/Test Cases

```ts
const octal: Octal = new Octal('10');
const dec: number = octal.toDecimal();
//=> 8
/*
// Decimal example (convert a string to a number)
const POW: number = 10;
let total: number; (124)
let multiplier: number = 1; (100)

'124'
 ^

// Convert a string/octal to decimal
const POW: number = 8;
let total: number; (8)
let multiplier: number = 1; (8)

'10'
^
*/
```

### Algorithm

1. Instantiate `POW` constant to eight
1. Instantiate `total` variable
1. Instantiate `multiplier` variable
1. Iterate over input str in reverse (reduce)
  - Access char at iteration
  - Convert char -> number as currentNumber
  - Multiply currentNumber by multiplier
  - Add currentNumber to total
  - Multiply multioplier by 8 (POW)
  - Decrement index
1. Return `total`
