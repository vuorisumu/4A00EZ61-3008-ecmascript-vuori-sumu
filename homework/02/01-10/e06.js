const isPositiveInteger = (value, onSuccess, onError) =>
  value > 0 ? onSuccess() : onError();

function yes() {
  console.log("positive");
}
function no() {
  console.log("non-positive");
}

isPositiveInteger(-5, yes, no);
