function Person(name, age) {
  this.name = name;
  this.age = age;
}

let tina = new Person("tina", 20);

for (let detail in tina) {
  console.log(tina[detail]);
}
