const someArray = [
  { data: 1 },
  { data: 2 },
  { data: 3 }
];

const [array0, array1, array2] = someArray.map(item => item.data)

console.log(array0, array1, array2);