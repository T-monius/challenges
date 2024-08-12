# Sieve

## Problem

Write a program that uses the Sieve of Eratosthenes to find all the primes from 2 up to a given number.

The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit. It does so by _iteratively_ marking as composite (i.e. not prime) the multiples of each prime, starting with the multiples of 2.

Create your _range_, starting at two and continuing up to and including the given limit. (i.e. `[2, limit]`).

The algorithm consists of repeating the following over and over:

take the next available unmarked? number in your list (it is prime)
mark all the multiples of that number (they are not prime)
Repeat until you have processed each number in your range. When the algorithm terminates, all the numbers in the list that have not been marked are prime. The wikipedia article has a useful graphic that explains the algorithm.

Notice that this is a very specific algorithm, and the tests don't check that you've implemented the algorithm, only that you've come up with the correct list of primes.

### Understanding

__Keywords__

- Iteratively
- Prime
- Range
- Limit

- Sieve
  - Find primes
  - 2 up to n
- Composite
  - note prime
- Mark multiples of primes as composite
- Range
  - [2..limit]
  - Value of number is offset from index by 2
    - index 0 has a value of 2

## Examples / Test Cases

```js
/*
take the next available unmarked? number in your list (it is prime)
mark all the multiples of that number (they are not prime)
Repeat until you have processed each number in your range. When the algorithm terminates, all the numbers in the list that have not been marked are prime. The wikipedia article has a useful graphic that explains the algorithm.
*/
const limit = 9;
const range = [2, 3, 4, 5, 6, 7, 8, 9];
//                c
//                   m     m     m
let multiple = 10;
let multiplier = 5;
const marked = {
  4: true,
  6: true,
  8: true,
};
```

## Algorithm

Setup
1. Instantiate a hash/map `marked`
1. Set `num` to `2`

Mark the numbers
1. While `num` is less than `limit`
1.   Instantiate `multiple` (at twice `num`) and `multiplier` (at `2`) variables
1.   While `multiple` is less than `limit`
1.     Mark the `multiple`
1.     Increment `multiplier`
1.     Set `multiple`
1.   Find the next `unmarked` number and set `num`

List the primes
1. Instantiate an array `primes` for return
1. Iterate from `2` up to `limit`
1.   If `num` at iteration is not `marked` push to `primes`
1. Return `primes`

Find next unmarked number
1. Iterate from `num + 1` up to `limit`
1.   If `num` isn't in `marked`, return it
