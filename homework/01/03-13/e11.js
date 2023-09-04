var carArr = ["Mercedes-Benz", "Ferrari", "BMW", "Ford", "Alfa Romeo"];
for (let i = 0; i < carArr.length; i++) {
  console.log(carArr[i]);
}
for (var car of carArr) {
  console.log(car);
}
