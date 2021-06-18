const products = {
  
  product1:{
    name:'Aceite',
    price:1800
  },
  product2:{
    name:'Arroz',
    price:2000
  },
  product3:{
    name:'Papa',
    price:1300
  },
  product4:{
    name:'Huevos',
    price:1800
  },
  product5:{
    name:'Chocolate',
    price:5000
  },
}


for (const product in products) {

  console.log(`${products[product]['name']}`);


}

let elem = prompt('Digite el nombre de un producto de la lista:');

for (const product in products) {

  if((products[product]['name'])===elem){
      console.error(`${products[product]['price']}`);
      //debugger
  }

}



