function max(arr) {
  let num = arr[0];
  arr.forEach((item) => {
    if (item > num) {
      num = item;
    }
  });
  return num;
}

function min(arr) {
  let num = arr[0];
  arr.forEach((item) => {
    if (item < num) {
      num = item;
    }
  });
  return num;
}

export { max, min };
