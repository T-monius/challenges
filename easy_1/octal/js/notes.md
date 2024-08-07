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

```ruby
  233 # decimal
= 2*10^2 + 3*10^1 + 3*10^0
= 2*100  + 3*10   + 3*1

  233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155
```
### Understanding

- NOTE: this problem would fit well a 'reduce' (reverse the string and reduce),
        but since there is no `reduce_right` like in JS, this is more
        performant.
- Digits > 7 are invalid (i.e. 8, 9)

### Algorithm

- Create an `Octal` class
  - `initialize` with a string
    - Assign input to an instance variable
- Define a `to_decimal` method
  - Declare a `decimal_sum` variable for return
  - Declare an `idx` from input length minus 1
  - `power` variable starting from 0
  - Iterate over the digits in reverse
    - Return `0` if character at iteration is not a digit or is a digit greater than `7`
    - Determine `8**power`
      - Multiply the digit at iteration by the result of previous operation
      - Add this result to `decimal_sum`
    - Decrement `idx`
    - Increment `power`
  - Return `decimal_sum`