function Person(fname, lname) {
  this.name = fname;
  this.lastName = lname;
  console.log(this instanceof Person);
}

var obj = Person("jack", "smith"); // prints false
// console.log(`${obj.name} ${obj.lastName}`);
// ^ can't do this ^

var person1 = new Person("bob", "smith"); // prints true
console.log(`${person1.name} ${person1.lastName}`);

var person2 = new Person("allu", "smith"); // prints true
console.log(`${person2.name} ${person2.lastName}`);

var person3 = new Person("max", "power"); // prints true
console.log(`${person3.name} ${person3.lastName}`);
