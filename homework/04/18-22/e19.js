let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    let thisworks = this;
    console.log(this);

    // this works because thisworks has now stored this function
    setTimeout(function () {
      console.log(thisworks);
    }, 1000);

    // this also works because of the same reason
    setTimeout(function () {
      thisworks.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello();
