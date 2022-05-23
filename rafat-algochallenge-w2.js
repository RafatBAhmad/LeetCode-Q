/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var after_reversing = 0;
  var befor_reversing = x;
  var reminder = 0;
  if (x >= 0) {
    while (x != 0) {
      reminder = x % 10;
      x = Math.floor(x / 10);
      after_reversing = after_reversing * 10 + reminder;
    }
    if (after_reversing == befor_reversing) {
      return true;
    } else return false;
  } else return false;
};

console.log(isPalindrome(121));
