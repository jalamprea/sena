
var arrayCompras = [] // es equivalente a hacer new Array()
  

// ¿Como agregar elementos al arreglo?
arrayCompras.push([0,1,2,3,4,5,6,7]);
// es equivalente a:
//   arrayCompras[0][0] = objetoProducto
//   arrayCompras[0][1] = 1

arrayCompras.push([0,1,2,3,4,5,6,7]);

// es equivalente a:
//   arrayCompras[1][0] = objetoProducto2
//   arrayCompras[1][1] = 2

//
// console.log(arrayCompras[0][0]);
// console.log(arrayCompras[0][1]);
// console.log(arrayCompras[1][0]);
// console.log(arrayCompras[1][1]);
console.log(arrayCompras);
console.log(arrayCompras[0][0]);
console.log(arrayCompras[0][1]);
console.log(arrayCompras[1][5]);

