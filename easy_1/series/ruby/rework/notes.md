# Series

## Task

- Write a program that will take a string of digits and give you all the possible consecutive number series of length n in that string.

For example, the string "01234" has the following 3-digit series:
```
- 012
- 123
- 234
```
And the following 4-digit series:
```
- 0123
- 1234
```
And if you ask for a 6-digit series from a 5-digit string, you deserve whatever you get.

## Understanding

- Series class
  - Stores a series attribute / Initializes
    - String
    - Digits
  - `slice` method
    - Input
      - Integer
        - `n`
        - Length of consecutive sub-series
    - Output
      - Collection
        - Array
          - Nested arrays
          - Integer values
    - _NOTE_ raise an error if `n` is larger than the length of the string

## Examples / Test Cases
```ruby
"01234"
    ^
      ^
[
  "012",
  "123",
  "213"
]

"012" #=> [0, 1, 2]
 ^

n = 3
distance betwen pointers = n - 1
Series.new('01234')
series.slices(3)
[[0, 1, 2], [1, 2, 3], [2, 3, 4]]
```

## Data Structures

- Array
  - substrings
  - Inner arrays of mapped / transformed digits

## Algorithm

- `Series` class
  - `slices` method
    - Raise an error if `n` is greater than the length of the sting
    - Get slices
    - Transform slices and return
  - Helpers
    - `substrings_of_length(n)`
      - Instantiate 2 pointers
        - anchor = 0
        - runner = anchor + n - 1
      - Instantiate a slices array
      - Iterate over the string while 2nd pointer less than length of the series
        - Slice the series from anchor to runner and push to return array
        - Increment pointers
      - Return slices
    - `substrings_to_ints(slices)`
      - Map slices
        - Split slice
        - Map slice to ints
