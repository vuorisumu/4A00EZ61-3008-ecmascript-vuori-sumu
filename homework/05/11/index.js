String.prototype.isPalindrome = function () {
  for (let i = 0; i < this.length / 2; i++) {
    if (this.charAt(i) != this.charAt(this.length - i - 1)) {
      return false;
    }
  }
  return true;
};

console.log("saippuakauppias".isPalindrome()); // true
console.log("abc".isPalindrome()); // false
