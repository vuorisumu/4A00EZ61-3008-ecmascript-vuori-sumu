function makeCalculation(a, b) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log("calculating stuff");
      if (a == 0 || b == 0) {
        reject("cannot divide with zero.");
      } else {
        const division = a / b;
        resolve(division);
      }
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    const random = Math.floor(Math.random() * 2);
    setTimeout(() => {
      if (random == 0) {
        reject("failed to connect to backend.");
      } else {
        console.log(`sending to backend ${result}`);
        resolve("done");
      }
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

makeCalculation(10, 5)
  .then((sum) => sendStuffToBackend(sum))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
