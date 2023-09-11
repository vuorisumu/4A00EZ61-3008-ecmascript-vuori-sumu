function repeat(string, times = 1) {
  let repeatedString = "";
  for (let i = 0; i < times; i++) {
    repeatedString += string;
  }
  return repeatedString;
}

console.log(repeat("moi")); // outputs "moi"
console.log(repeat("moi", 4)); // outputs "moimoimoimoi"
