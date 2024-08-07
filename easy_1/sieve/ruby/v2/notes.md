# Sieve

## Desciption

Write a program that uses the Sieve of Eratosthenes to find all the primes from 2 up to a given number.

The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit. It does so by iteratively marking as composite (i.e. not prime) the multiples of each prime, starting with the multiples of 2.

Create your range, starting at two and continuing up to and including the given limit. (i.e. [2, limit]).

The algorithm consists of repeating the following over and over:

take the next available unmarked number in your list (it is prime)
mark all the multiples of that number (they are not prime)
Repeat until you have processed each number in your range. When the algorithm terminates, all the numbers in the list that have not been marked are prime. The wikipedia article has a useful graphic that explains the algorithm.

Notice that this is a very specific algorithm, and the tests don't check that you've implemented the algorithm, only that you've come up with the correct list of primes.

## Understanding

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

```ruby
[2, 3, nil, 5, nil, 7]
#                   ^
#                    m
```
## Algorithm

- Create a `Sieve` class that instantiates to a new range with a `limit` parameter
  - Assigne `limit` to an instance variable
  - Create range from `2` up to `limit` and store as an instance variable
- Create a `primes` instance method
  - Concatenate an array of `[nil, nil]` to `@sieve`
    - `mock_sieve`
  - Declare a `primes_array` for return
  - Declare a `idx` variable for iteration
  - While `idx` is less than `@limit`
    - if value at `idx` is not `nil` (composite)
      - Push value at `idx` to `primes_array`
      - Declare a `multiplier` value
      - While `multiplier` is less than the `limit`
        - Multiply `multiplier` by `idx`
        - Access `mock_sieve` and assign value at `multiplier` to `nil`
    - Increment `idx`
  - Return `primes_array`
