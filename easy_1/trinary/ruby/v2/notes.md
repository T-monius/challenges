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

## Examples / Test Cases
```ruby
# "102012"
    1       0       2       0       1       2    # the number
1*3^5 + 0*3^4 + 2*3^3 + 0*3^2 + 1*3^1 + 2*3^0    # the value
  243 +     0 +    54 +     0 +     3 +     2 =  302
```

## Algorithm

- For each digit
  - Multiply it by the 3 to the POWER at its position / idx
- Reverse the string
  - Reduce with index as 'pow'
    - Early return if character at iteration is not valid
    - Add the result of above described operation to accumulator