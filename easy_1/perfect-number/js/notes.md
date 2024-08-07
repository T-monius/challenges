# Perfect Number

## Problem

The Greek mathematician Nicomachus devised a classification scheme for natural numbers, identifying each as belonging uniquely to the categories of abundant, perfect, or deficient. A perfect number equals the sum of its positive divisors — the pairs of numbers whose product yields the target number, excluding the number itself. This sum is known as the Aliquot sum.

- Perfect: Sum of factors = number
- Abundant: Sum of factors > number
- Deficient: Sum of factors < number

Examples:

- 6 is a perfect number because its divisors are 1, 2, 3 and 6 = 1 + 2 + 3.
- 28 is a perfect number because 28 = 1 + 2 + 4 + 7 + 14.
- Prime numbers 7, 13, etc are deficient by the Nicomachus classification.
- Write a program that can tell if a number is perfect, abundant or deficient.

### Understanding

- Find the factors of a number exclusive
- Sum them
- Determine if the sum is <, =, > the number

## Examples / Test Cases

```

// Example 1
n = 6
factors = 1, 2, 3
sum = 6
//=> Outputs perfect

// Examples 2
n = 28
factors = 1, 2, 4, 7, 14
sum = 28
//=> perfect


// Example 3
n = 7
factors = 1 //=> prime
sum = 1 // ?
//=> perfect
```

## Data Structures

- Array
  - Factors

## Algorithm
### Functional Abstracions
- Selection
  - Select numbers from a range
- Reduction
  - Sum the range

### Hard Algorithm
- Raise an error if the 'input number' is less than 0
- Declare an array for return
- Iterate from 1 up to the half the number
  - If the 'input number' modulus 'current number' is zero
    - Push it to the array
- Sum the range
- If the sum equals the number
  - Return perfect
- Else if its greater
  - Return abundant
- Else deficient
