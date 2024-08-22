# Luhn

## Problem

The Luhn algorithm (according to Brave AI result) is a simple checksum formula used to validate identification numbers, such as credit card numbers. It was developed by Hans Peter Luhn in 1954 to protect against accidental errors, like digit mistyping.

_Step-by-Step Calculation:_

- Take the credit card number (without the check digit, if present) and reverse its order.
- Double every second digit (from right to left) and subtract 9 if the result is greater than 9.
- Add all odd digits (from right to left) and sum the result with the modified even digits (from step 2).
- The calculated value should be divisible by 10. If it is not, the credit card number is invalid or fake.

__Understanding:__
- Checksum
  + Totals all of the digits of a number to compare
  + Reduce model
- Double every second number from the right
  + Transformation
  + (if) Doubling excedes 10
    > Minus 9
- Total digits of new number
  + `checkscum` instance method
- New number validation
   + `valid?` instance method
   + Total
   + Total % 10 == 0 ?
 - Invalid by 1
   + `Luhn#create` class method
   + Add 1
   + Return original number and new number
     > According to the test suite, it just returns the new number
   + Append a new digit to the original starting with zero
     + Continue with different numbers until a valid luhn
       number is derived

## Examples/Test Cases

```js
const num = 201773;
const luhn = new Luhn(num)
luhn.addends();
//=> [4, 0, 2, 7, 5, 3]
luhn.checksum();
//=> 21
```

## Data Structures

- Array

## Algorithm

_Functional abstractions_

- Map
- Reduce

_Hard algorithm_

`addends`
1. Convert `num` to string
1. Split number string
1. Reverse array
1. Map split and reversed string elements
1.   Convert string element to number
1.   If index is odd
1.     Double val
1.     If doubled val is greater than 9, subtract 9
1.   Return new number to the new array

`checksum`
w/ use of `addends`
1. Reduce addends from zero accumulator

w/o use of `addends`
1. Right reduce stringified split number
1.   Convert string num at iteration to number
1.   Double if index is odd and conditionally subtract nine
1.   Add number to running total/accumulator value

`isValid`

1. Interrogate checksum as per divisibility by 10 w/ remainder operator
