# sum_of_multiples.rb

class SumOfMultiples
  def initialize(*ints)
    ints.empty? ? @set = [3, 5] : @set = ints
  end

  def self.to(target)
    set = SumOfMultiples.new
    set.to(target)
  end

  def to(target)
    sum = 0

    1.upto(target - 1) do |n|
      sum += n if multiple(n)
    end
    sum
  end

  private
  attr_reader :set

  def multiple(n)
    set.any? { |number_from_set| n % number_from_set == 0 }
  end
end
