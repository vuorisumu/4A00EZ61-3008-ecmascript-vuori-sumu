function doIt() {
  a = 5;
  console.log(this);
  console.log(this == global);
}

doIt();
console.log(a);
