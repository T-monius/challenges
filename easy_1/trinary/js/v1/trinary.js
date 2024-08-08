// trinary.js
import reduceTrinary from './utils/reduceTrinary.js';

class Trinary {
  constructor(trinaryInputString) {
    this.trinary = trinaryInputString;
  }

  toDecimal() {
    try {
      return reduceTrinary(this.trinary);
    } catch(e) {
      return 0;
    }
  }
}

export default Trinary;