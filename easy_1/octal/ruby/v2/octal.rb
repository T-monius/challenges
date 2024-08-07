# octal.rb

class Octal
  attr_reader :octal

  def initialize(octal_str)
    @octal = octal_str
  end

  def to_decimal
    decimal_sum = 0
    idx = octal.length - 1
    power = 0

    while idx >= 0
      return 0 unless octal[idx].match?(/[0-7]/)
      octal_digit = octal[idx].to_i

      decimal_sum += (octal_digit * (8**power))
      idx -= 1
      power += 1
    end

    decimal_sum
  end
end
