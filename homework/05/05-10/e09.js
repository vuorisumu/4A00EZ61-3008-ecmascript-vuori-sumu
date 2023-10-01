class Dog {
  constructor(name) {
    this.name = name;
  }

  sniffButt() {
    console.log(this.name + " sniffs butt");
  }

  delayedSniffButt() {
    setTimeout(this.sniffButt.bind(this), 1000);
  }
}

let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();

spot.delayedSniffButt();
vilma.delayedSniffButt();
