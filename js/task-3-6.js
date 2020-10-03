function getAllPropValues(array, prop) {
  let getALL = [];
  let keys = prop;
  if (array.length == 0) return getALL;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[0][keys] === "undefined" || array[0][keys] === null)
      return getALL;
    getALL.push(array[i][keys]);
  }
  return getALL;
}
// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity"));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, "category"));
// not element
