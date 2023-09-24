class Person {
  constructor(fname, lname) {
    this.name = fname;
    this.lastName = lname;
  }
}

var person1 = new Person("bob", "smith"); // prints true
console.log(`${person1.name} ${person1.lastName}`);

var person2 = new Person("allu", "smith"); // prints true
console.log(`${person2.name} ${person2.lastName}`);

var person3 = new Person("max", "power"); // prints true
console.log(`${person3.name} ${person3.lastName}`);
