class Trinary {
  constructor(str) {
    this.trinary = str;
    this.base = 3;
  }

  toDecimal() {
    if (!this.isValid()) { return 0 }

    let decimal = 0;
    for(let idx = this.trinary.length - 1; idx >= 0; idx -= 1) {
      const multiplier = (this.trinary.length - 1) - idx;
      const char = this.trinary[idx];
      let val = Number(char);
      val *= (this.base**multiplier);
      decimal += val;
    }

    return decimal;
  }

  isValid() {
    let validity = true
    for(let idx = 0; idx < this.trinary.length; idx += 1){
      const char = this.trinary[idx];
      if (!/[0-2]/.test(char)) {
        validity = false;
        break;
      }
    }

    return validity;
  }
};

export { Trinary };
