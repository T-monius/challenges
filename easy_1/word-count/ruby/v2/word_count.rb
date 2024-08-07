# word_count.rb

class Phrase
  def initialize(input_phrase)
    @phrase = input_phrase
  end

  def word_count
    phrase
    .downcase
    .scan(/\b[\w]+'?[\w]?\b/i)
    .reduce({}) do |count_dict, word|
      count_dict[word] ? count_dict[word] += 1 : count_dict[word] = 1
      count_dict
    end
  end

  protected
  attr_reader :phrase
end
