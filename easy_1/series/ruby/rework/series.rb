# series.rb

class Series
  def initialize(input_series)
    self.series = input_series
  end

  def slices(n)
    raise ArgumentError if n > series.length

    substrs = substrings_of_length(n)
    substrings_to_ints(substrs)
  end

  private
  attr_accessor :series

  def substrings_of_length(n)
    pointer = 0
    substrs = []

    while (pointer + n) <= series.length
      substrs << series.slice(pointer, n)
      pointer += 1
    end

    substrs
  end

  def substrings_to_ints(substrs)
    substrs.map do |substr|
      ints = []
      substr.each_char { |char| ints << char.to_i }
      ints
    end
  end
end