# test_odd_words.rb
require 'minitest/autorun'
require_relative 'odd_words.rb'

class OddWordsTest < Minitest::Test
  def test_simple_sentence
    char_set = CharacterSet.new('whats the matter with kansas.')
    assert_equal('whats eht matter htiw kansas.', char_set.clean)
  end

  def test_multiple_contiguous_spaces
    skip
    char_set = CharacterSet.new('whats  the matter with kansas.')
    assert_equal('whats eht matter htiw kansas.', char_set.clean)
  end

  def test_sentence_starts_with_a_space
    skip
    char_set = CharacterSet.new(' whats the matter with kansas.')
    assert_equal('whats eht matter htiw kansas.', char_set.clean)
  end

  def test_sentence_ends_with_a_space_before_the_dot
    skip
    char_set = CharacterSet.new('whats  the matter with kansas.')
    assert_equal('whats eht matter htiw kansas.', char_set.clean)
  end
end