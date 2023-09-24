let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

function sayHello() {
  user.sayHello();
}

setTimeout(sayHello, 1000); // it prints "does it work" because it will be changed when this finally gets called

user.sayHello = function () {
  console.log("does it work?");
};
