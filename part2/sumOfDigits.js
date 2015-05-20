function sumOfDigits(num) {
  num = Math.abs(num);
  num = num.toString();

  if (num[1] === undefined) {
    return parseInt(num, 10);
  }
  else {
    return (parseInt(num[0], 10) + sumOfDigits(num.slice(1)));
  }

}

module.exports = sumOfDigits;

  // if number is negative or positive, treat it like a positive
  // read each digit in the number
  // add them together
  // use a recusrive function