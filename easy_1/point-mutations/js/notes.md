# Point Mutations

## Problem

- Point mutation
  - Most common nucleic acid mutation
  - One base replaced with another
    - At a single nucleotide
- Hamming distance
  - 2 DNA strands
  - Count differences between two strands
    - Equal lengths compared
    - Shorter of two lengths used when not even

## Examples / Test Cases

```
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^

               ^

differences = 7
```
```ruby
DNA.new('ACCAGGG').hamming_distance('ACTATGG')

=begin
DNA instance instantiated with a string
`hamming_distance` instance method returnes the difference count between the parameter and strand stored as instance variable
Return 0 if no differences
=end
```

## Algorithm

- Reduce the shorter of the two strings
  - Increment the count if character at idx of other string is not equal to the character at iteration
