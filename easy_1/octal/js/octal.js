// octal.js

class Octal {
  constructor(octalStr) {
    this.octal = octalStr;
  }

  toDecimal() {
    const octalCharArr = this.octal.split('');
    let power = -1;

    try {
      return octalCharArr.reduceRight((decimalMemo, octalChar) => {
        if (!/[0-7]/.test(octalChar)) {
          throw 'Invalid Octal.'
        };
        power += 1;
        return decimalMemo + (octalChar * (8**power));
      }, 0);
    } catch(e) {
      return 0;
    };
  }
}

export default Octal;
