function helper() {
  user.sayHello();
}
let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(helper, 1000);
  },
};
user.sayHello();
user.sayDelayedHello(); // it works because it stores the function and the variables temporary for the delay so it doesn't come out as undefined
