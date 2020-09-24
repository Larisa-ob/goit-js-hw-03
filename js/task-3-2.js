const countProps = function (obj) {
  const keys = Object.keys(obj);
  console.log(keys);
  return keys.length;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
