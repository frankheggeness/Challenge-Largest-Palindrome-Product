/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var dummyfactor0 = 0;
  var dummyfactor1 = 0
  var palindromeNumber = 0;
  let product = 0;
  let max = 0;

  // do your work here

  function palindromeCheck(input) {
    var palindrome = parseInt(
      input
        .toString()
        .split("")
        .reverse()
        .join("")
    );

    if (palindrome === input) return true;
    else return false;
  }

  (function () {
    for (
      dummyfactor0 = Math.pow(10, digits - 1);
      dummyfactor0 <= Math.pow(10, digits) - 1;
      dummyfactor0++
    ) {
      for (dummyfactor1 = Math.pow(10, digits - 1); dummyfactor1 <= Math.pow(10, digits) - 1; dummyfactor1++) {
        product = dummyfactor0 * dummyfactor1;
        if (palindromeCheck(product)) {
          if (max < product) {
            factor_0 = dummyfactor0;
            factor_1 = dummyfactor1;
            max = product;
            palindromeNumber = max;

          }
        }
      }
      getPalindromeNumber();
      getFactor0();
      getFactor1();
    }
  }());

  function getPalindromeNumber() {
    return palindromeNumber;
  }
  function getFactor0() {
    return factor_0;
  }
  function getFactor1() {
    return factor_1
  }
  console.log(palindromeNumber);
  return {
    palindromeCheck: palindromeCheck,
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber

  };
};
