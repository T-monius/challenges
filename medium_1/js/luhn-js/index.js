class Luhn {
  constructor(num) {
    this.num = num;
  }

  addends() {
    let result = this.num
      .toString()
      .split('')
      .toReversed()
      .map( (str, idx) => {
        let num = Number(str);
        if (idx % 2 === 1) {
          num = num * 2;
          num = num > 9 ? num - 9: num;
        };
        return num;
      })
      .toReversed();

    return result;
  }

  checksum() {
    const checksum = this.addends()
      .reduce( (acc, num) => acc + num );

    return checksum;
  }

  isValid() {
    const checksum = this.checksum();

    return checksum % 10 === 0;
  }
};

export { Luhn };