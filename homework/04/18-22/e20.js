let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(() => {
      this.sayHello();
    }, 1000);
    /*setTimeout(function () {
      this.sayHello();
      // this fails because this is not saved in an outer function
    }, 1000);*/
  },
};
user.sayDelayedHello();

// Babel turns "this" into "var _this"
