# trinary.rb

class Trinary
  attr_reader :trinary

  def initialize(trinary_input_str)
    @trinary = trinary_input_str
  end

  def to_decimal
    pow = -1
    trinary
    .chars
    .reverse
    .reduce(0) do |acc, trinary_digit|
      return 0 unless trinary_digit.match?(/[0-2]/)

      pow += 1
      acc + trinary_digit.to_i * (3**pow)
    end
  end
end