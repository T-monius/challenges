# perfect_number.rb

class PerfectNumber
  def self.classify(int)
    raise if int < 1

    sum = self
         .get_factors(int)
         .sum
    return 'perfect' if sum == int
    return 'abundant' if sum > int
    'deficient'
  end

  def self.get_factors(int)
    factors = []
    idx = 1
    limit = int / 2
    loop do
      break if idx > limit

      factors << idx if int % idx == 0
      idx += 1
    end
    factors
  end
end

p PerfectNumber.get_factors(28)
