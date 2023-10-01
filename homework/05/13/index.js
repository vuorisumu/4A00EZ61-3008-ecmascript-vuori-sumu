class Person {
  constructor(name) {
    this.name = name;
    // a)
    // this.hello = () => {
    //   console.log(`hello ${this.name}`);
    // };
  }

  // b)
  hello = () => {
    console.log(`hello ${this.name}`);
  };

  delayedHello() {
    setTimeout(this.hello, 1000);
  }
}
let jack = new Person("jack");
jack.delayedHello();
