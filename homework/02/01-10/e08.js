function doIt() {
  console.log("hello");
}
console.log(typeof doIt); // Result is "function", because doIt is a function
console.log(doIt instanceof Function); // Result is "true", because doIt is an instance of function
