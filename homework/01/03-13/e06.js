// VAR
console.log(varDemonstration);
if (true) {
  var varDemonstration = "There is no escape";
}

console.log(varDemonstration);
var varDemonstration = "Var can be redeclared";
console.log(varDemonstration);

// LET
if (true) {
  try {
    console.log(letDemonstration);
  } catch (e) {
    console.log("Let must be declared before use \n" + e);
  }

  let letDemonstration = "Let is contained";
  console.log(letDemonstration);
}

try {
  console.log(letDemonstration);
} catch (e) {
  console.log("Can't use let outside of its scope. \n" + e);
}

// CONST
if (true) {
  const constDemonstration = "Const is contained";
  console.log(constDemonstration);
}
try {
  console.log(constDemonstration);
} catch (e) {
  console.log("Const must be declared before use \n" + e);
}
const constDemonstration = "Const must be assigned when declared";
try {
  constDemonstration = "Trying to reassign const";
} catch (e) {
  console.log("Const cannot be reassigned \n" + e);
}
