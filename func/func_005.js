function partiPow(x) {
  return y => {
    return y ** x;
  };
}

const qv = partiPow(2);
const cb = partiPow(3);
console.log(qv(5));
console.log(cb(5));