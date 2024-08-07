# sieve.rb

=begin
sieve = [2, 3, 4, 5, 6, 7, 8, 9, 10]
mock_sieve = [nil, nil, 2, 3, nil, 5, 6, 7, nil, 9, 10]
                           i
                                      m

primes_array = [2, 3]
limit = 10
idx = 3
mock_sieve[idx] = 2
multiplier = 3
=end


class Sieve
  def initialize(limit)
    @sieve = (2..limit).to_a
    @limit = limit
  end

  def primes
    primes_array = []
    mock_sieve = [nil, nil] + sieve

    2.upto(limit) do |int|
      if mock_sieve[int]
        multiplier = mock_sieve[int]
        primes_array << multiplier
        inner_idx = 2
        multiple = multiplier

        while multiple < limit
          multiple = multiplier * inner_idx
          mock_sieve[multiple] = nil
          inner_idx += 1
        end

        multiplier = nil
      end
    end

    primes_array
  end

  private
  attr_reader :limit, :sieve
end
