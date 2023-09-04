var a = 1;
var b = 2;
let x = "'"; // outputs '
let y = '"'; // outputs "

let demo = [
  "There is no real difference between the usage of \" and '",

  "But if you want to just output a single character of ' \nyou should either write it as \"'\" or use an escape sequence and write it as '\\''",

  `with \` you can
write text in multiple lines
with no escape sequences`,

  "Using variables in text with quotations like this \n" +
    a +
    " + " +
    b +
    " = " +
    (a + b) +
    " makes the code harder to read",

  `So instead you want to use backticks with dollar signs and curly brackets like this
${a} + ${b} = ${a + b}`,
];

for (let i = 0; i < demo.length; i++) {
  console.log(demo[i]);
}
