# Sum of Multiples

## Problem

- Input
  - Integer
- Output
  - Integer
    - Sum
      - Multiples of 'particular numbers' / a set
        - Default 3 && 5
      - Up to
      - Exclusive

## Examples / Test Cases

```js
n = 20;
set = [3, 5];

// multiples = 3, 5, 6, 9, 10, 12, 15, and 18
SumOfMultiples.to(20) #=> 78
```

## Data Structures

- Array for my 'set'

## Algorithn

- `initialize`
  - Define with splat operator for a single parameter
  - Assign parameters to a `set` instance variable
- `to`
  - `target` parameter
  - Declare a `sum` variable instantiated to `0`
  - Iterate from 1 up to `target`
    - If the number at iteration is a multiple of any of the numbers in the `set`
      - `any?` w/ modulus in block
      - Add to `sum`
  - Return `sum`