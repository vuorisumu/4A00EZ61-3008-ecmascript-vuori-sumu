function Mammal(name) {
  if (this instanceof Mammal) {
    this.name = name;
  } else {
    throw new Error("use the keyword 'new'");
  }
}

Mammal.prototype.giveBirth = function () {
  console.log(this.name + " gives birth");
};

function Dog(name, breed) {
  if (this instanceof Dog) {
    Mammal.call(this, name);
    this.breed = breed;
  } else {
    throw new Error("use the keyword 'new'");
  }
}

Dog.prototype.bark = function () {
  console.log(this.name + " barks");
};

Object.setPrototypeOf(Dog.prototype, Mammal.prototype);

function Cat(name, breed) {
  if (this instanceof Cat) {
    Mammal.call(this, name);
    this.breed = breed;
  } else {
    throw new Error("use the keyword 'new'");
  }
}

Cat.prototype.meow = function () {
  console.log(this.name + " meow");
};

Object.setPrototypeOf(Cat.prototype, Mammal.prototype);

let catTest = new Cat("kisu", "maatiainen");
catTest.meow();
catTest.giveBirth();
