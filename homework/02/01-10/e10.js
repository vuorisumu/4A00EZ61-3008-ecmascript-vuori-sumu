function doIt() {
  let output = "";
  for (let i = 0; i < arguments.length; i++) {
    output += arguments[i];
  }
  console.log(output);
}

doIt("a"); // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc
