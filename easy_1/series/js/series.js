// series.js

export default class Series {
  constructor(series) {
    this.series = series;
  };

  slices(n) {
    if (n > this.series.length) {
      throw "Invalid slice length.";
    }

    const substrs = this.substringsOfLength(n);
    return this.substrsToNums(substrs);
  };

  substringsOfLength = (n) => {
    let pointer = 0;
    const substrs = [];

    while((pointer + n) <= this.series.length) {
      substrs.push(this.series.substr(pointer, n));
      pointer += 1;
    }

    return substrs;
  };

  substrsToNums = (substrs) => {
    return substrs.map( (substr) => {
      const nums = [];

      for(let idx = 0; idx < substr.length; idx += 1) {
        const char = substr[idx];
        nums.push(Number(char));
      };

      return nums;
    });
  };
};