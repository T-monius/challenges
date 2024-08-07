module RomanNumerals
  TENS = { 1 => 'I', 10 => 'X', 100 => 'C', 1000 => 'M' }
  FIFTHS = { 1 => 'V', 10 => 'L', 100 => 'D' }

  def to_roman
    num = self
    powers_of_ten(inclusive_limit: 1000)
    .reduce('') do |roman_numerals, magnitude|
      rem = num % magnitude
      quotient = num / magnitude
      if quotient > 0
        roman_num = convert_num(quotient, magnitude)
      end
      num = rem
      roman_num ? roman_numerals + roman_num : roman_numerals
    end
  end

  private
  def powers_of_ten(inclusive_limit:)
    pow = inclusive_limit
    arr = []

    while pow >= 1
      arr << pow
      pow /= 10
    end
    arr
  end

  def convert_num(num, mag)
    roman_char = TENS[mag]

    case num
    when 1..3
      roman_char * num
    when 4
      roman_char + FIFTHS[mag]
    when 5
      FIFTHS[mag]
    when 6..8
      FIFTHS[mag] + roman_char * (num % 5)
    when 9
      roman_char + TENS[mag * 10]
    end
  end
end

class Integer
  include RomanNumerals
end