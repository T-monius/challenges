class Octal {
  octalStr: string;
  constructor(octalStr: string) {
    this.octalStr = octalStr;
  }

  toDecimal(): number {
    const POW: number = 8;
    let total: number= 0;
    let multiplier: number = 1;

    for(let idx: number = this.octalStr.length - 1; idx >= 0; idx -= 1) {
      const char: string = this.octalStr[idx];
      let num: number = Number(char);
      num *= multiplier;
      total += num;
      multiplier *= POW;
    }

    return total;
  }
};

export { Octal };
