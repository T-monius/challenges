class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    const iterationDuration = this.determineIterationDuration(this.strand, otherStrand);
    let distance = 0;

    for(let idx = 0; idx < iterationDuration; idx += 1) {
      if(this.strand[idx] !== otherStrand[idx]) {
        distance += 1;
      }
    }
    return distance;
  }

  determineIterationDuration(strand, otherStrand) {
    if (strand.length <= otherStrand.length) {
      return strand.length;
    } else {
      return otherStrand.length;
    }
  }
}

export default DNA;