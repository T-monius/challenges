# point_mutations.rb

class DNA
  def initialize(strand)
    self.strand = strand
  end

  def hamming_distance(other_strand)
    if strand.length <= other_strand.length
      shorter = strand
      longer = other_strand
    else
      shorter = other_strand
      longer = strand
    end

    count = 0
    shorter.each_char.with_index do |char, idx|
      count += 1 if char != longer[idx]
    end

    count
  end

  protected
  attr_accessor :strand
end
