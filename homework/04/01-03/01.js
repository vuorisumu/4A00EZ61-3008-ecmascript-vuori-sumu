let f = doIt();
f();

function doIt() {
  return () => console.log("hello world");
}
