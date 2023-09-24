let user = {
  firstName: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`);
  },
};
let myFunction = user.sayHello;
myFunction();

let helloJack = user.sayHello.bind(user);
helloJack();
