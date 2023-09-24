doIt(false)(); // outputs hello
doIt(true)(); // outputs world

function doIt(a) {
  return () => console.log(!a ? "hello" : "world");
}
