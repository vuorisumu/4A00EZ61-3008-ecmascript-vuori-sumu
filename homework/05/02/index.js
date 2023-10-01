import { default as numberArray } from "./modules/commandlineargument.js";
import { max, min } from "./modules/utility.js";
let myarray = numberArray();
console.log(`max = ${max(myarray)}
min = ${min(myarray)}`);
