# Trinary

## Problem

- Convert 'trinary' number
  - String representation
  - To decimal
  - First principles
  - No libraries
- Trinary number
  - digits: 0, 1, 2
  - Last number is the 1's place
- Input
  - String
- Output
  - Decimal number
  - Or, Zero

__Understanding__

- Base 3
- Every position from right to left is a power of 3 greater than the previous

## Examples / Test Cases
```js
const base = 3;
const multiplier = 0;
const decimal = 0;
const input = '10';
/*             ^
  (base**multiplier) => (3**0) => 1
  (val * pow) => (0 * 1) => 0
  (decimal + result) => 0

    (base**multiplier) => (3**1) => 3
    (val * pow) => (1 * 3) => 1
    (decimal + result) => 3

  final output => 3
*/
```

## Algorithm

1. Instantiate `decimal` number var
1. Iterate w/ over input in reverse
1.   Solve for `multiplier`: distance from end of input (`input.length - idx`)
1.   Access current `char`; convert to decimal as `val`
1.   Solve for `power`
1.   multiply `val` by `power` w/ mutation
1.   Add `val` to `decimal`
1. Return `decimal`