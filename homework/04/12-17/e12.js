let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.sayHello(); // "Hello, Jack"
let myfunc = user.sayHello;
myfunc(); // "Hello, undefined!" because myFunc doesn't have a name variable
