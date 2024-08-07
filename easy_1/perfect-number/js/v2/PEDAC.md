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

```js
let num = 7
/*
const factors = [1]
1, 2, 3
   c
d = 3.5
*/
```

## Data Structures

- Array

## Algorithm
### Functional Abstracions
- Selection
- Reduction

### Hard Algorithm
- Instantiate 'factors' array
- Iterate from 1 while num <= (num/2)
- At iteration, divide the 'num' by 'current'
  - If dividend is a whole number, push to 'factors' array
    - Whole number determined if modulus of dividend is zero
- Sum 'factors'
- Determine if the sum is <, =, > the number
