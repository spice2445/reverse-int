module.exports = function reverse (n) {
  let reverseNum = n.toString().split('').reverse().join('');
  let num = Math.sign(n) * parseInt(reverseNum);

  if ( n < 0 ) {
      return num * -1;
  }

  return num;
}
