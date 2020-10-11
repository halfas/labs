import composer from "./goss";

const qv = x => x * x;
const sc = x => x + 1;

let firstFunc = composer(qv, sc);
let secondFunc = composer(sc, qv);
console.log(firstFunc(5), secondFunc(5));