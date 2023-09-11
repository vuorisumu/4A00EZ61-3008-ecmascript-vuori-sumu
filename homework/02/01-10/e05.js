const isPositiveInteger = function (value, onSuccess, onError) {
  return value > 0 ? onSuccess() : onError();
};

function yes() {
  console.log("positive");
}
function no() {
  console.log("non-positive");
}

isPositiveInteger(5, yes, no);
