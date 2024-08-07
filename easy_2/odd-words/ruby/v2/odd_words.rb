# odd_words.rb

class CharacterSet
  def initialize(input_str)
    @char_set = input_str
  end

  def clean
    idx = find_next_alpha_index(char_set, 0)
    word_count = 0
    clean_str = ''
    while idx < char_set.length
      char = char_set[idx]
      if letter?(char)
        if (word_count % 2 == 0)
          while letter?(char)
            clean_str << char
            idx += 1
            char = char_set[idx]
          end
        else
          idx = find_end_of_word(char_set, idx)
          char = char_set[idx]
          while letter?(char)
            clean_str << char
            idx -= 1
            char = char_set[idx]
          end
          idx = find_end_of_word(char_set, idx) + 1
        end
        word_count += 1
      elsif char.match?(/\s/) && word_count > 0
        clean_str << ' '
        idx = find_next_alpha_index(char_set, idx)
      else
        idx += 1
      end
    end

    clean_str
  end

  private
  attr_reader :char_set

  def find_next_alpha_index(str, current_idx)
    current_idx += 1 until str[current_idx].match?(/[a-z]/i)
    current_idx
  end

  def find_end_of_word(str, current_idx)
    current_idx += 1 until !str[current_idx].match?(/[a-z]/i)
    current_idx - 1
  end

  def letter?(char)
    char.match?(/[a-z]/i)
  end
end