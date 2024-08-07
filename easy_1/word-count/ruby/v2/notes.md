# Word Count

## Problem

- Write a program that given a phrase can count the occurrences of each word in that phrase.
- Input (`initialize`)
  - String
    - Space separated words
    - Word
      - Contiguous alphanumeric characters
      - Case insensitive

- Output (`word_count`)
  - Dictionary / hash
    - word key
    - count value

## Examples / Test Cases

```ruby
Phrase.new('word') #=> { 'worrd' => 1 }
```

## Algorithm

- Instantiate a `Phrase` object w/ a string
  - Assign input string to an instance variable
- `word_count`
  - Downcase phrase and parse for words (`/\b[\w]+'?[\w]?\b/i`)
  - Instantiate a dictionary for return (or reduce)
  - Iterate array of parsed words
    - Access the dict with the word at iteration
    - If the word exists, increment it's value
    - Else, add it assigning the count to 1
  - Return dictionary
