// let obj = { name: "jussi" };

function Dog(name) {
  this.name = name;

  // makes sure this function will always refer to the
  // current instance of a dog
  this.sniffButt = this.sniffButt.bind(this);

  // will always refer to obj object
  // this.sniffButt = this.sniffButt.bind(obj);

  // overwrites the function in every dog
  // this.sniffButt = function () {
  //   console.log("hello world");
  // };
}
Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
};

Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000);
};

let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();

// will not work before the modifications
// because this.name will be undefined
spot.delayedSniffButt();
vilma.delayedSniffButt();
