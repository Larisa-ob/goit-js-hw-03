const findBestEmployee = function (employees) {
  // твой код
  let idx = 0;
  const names = Object.keys(employees);
  if (names.length == 0) return "";
  const values = Object.values(employees);
  const max = Math.max(...values);
  for (let i = 0; i < values.length; i += 1) {
    if (max === values[i]) idx = i;
  }
  return names[idx];
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
