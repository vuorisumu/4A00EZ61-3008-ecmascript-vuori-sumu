export default function () {
  const arr = process.argv.splice(2);
  const res = [];
  arr.forEach((item) => {
    try {
      const num = Number(item);
      if (isNaN(num)) {
        throw new TypeError("Only give numbers as arguments");
      }
      res.push(num);
    } catch (err) {
      throw err;
    }
  });

  return res;
}
