function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    setInterval(() => this.tick(), 1000);
  };

  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };

  this.render = function () {
    return this.time;
  };
}

let clock = new Clock();
console.log(clock.render()); // outputs time
clock.startInterval(); // outputs time for every second, uses render
