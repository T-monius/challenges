# anagrams.rb

class Anagram
  def initialize(input_word)
    @key_word = input_word
  end

  def match(word_list)
    sorted_key_word = key_word.downcase.split('').sort
    word_list.select do |word|
      not_key_word = word.downcase != key_word.downcase
      is_an_anagram = word.downcase.split('').sort == sorted_key_word
      not_key_word && is_an_anagram
    end
  end

  private
  attr_reader :key_word
end