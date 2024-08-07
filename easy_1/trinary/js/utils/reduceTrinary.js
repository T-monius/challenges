const reduceTrinary = (trinary) => {
  const trinaryArr = trinary.split('');
  let power = -1;

  return trinaryArr.reduceRight((acc, trinaryDigit) => {
    if (!/[0-2]/.test(trinaryDigit)) {
      throw 'Invalid trinary digit';
    }

    power += 1;
    return acc + Number(trinaryDigit) * (3**power);
  }, 0);
};

export default reduceTrinary;