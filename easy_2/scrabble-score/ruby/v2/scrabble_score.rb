# scrabble_score.rb

class Scrabble
  WORD_VALUES = { 'a' => 1, 'b' => 3, 'c' => 3, 'd' => 2, 'e' => 1, 'f' => 4,
                  'g' => 2, 'h' => 4, 'i' => 1, 'j' => 8, 'k' => 5, 'l' => 1,
                  'm' => 3, 'n' => 1, 'o' => 1, 'p' => 3, 'q' => 10, 'r' => 1,
                  's' => 1, 't' => 1, 'u' => 1, 'v' => 4, 'w' => 4, 'x' => 8,
                  'y' => 4, 'z' => 10 }

  def initialize(word)
    @word = word
  end

  def score
    return 0 if word.nil?
    scrabble_score = 0
    idx = 0

    loop do
      break if idx >= word.length
      char = word[idx].downcase
      idx += 1 and next unless char.match(/[a-z]/)
      scrabble_score += WORD_VALUES[char]
      idx += 1
    end
    scrabble_score
  end

  def self.score(word)
    Scrabble.new(word).score
  end

  private
  attr_reader :word
end
