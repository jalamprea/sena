/*
1. Cree un programa que pida al usuario el nombre de un producto existente en una tienda, luego, que le muestre el precio del producto. El usuario debe poder elegir de entre por lo menos cinco productos. Use diccionarios.
*/

const products = {
  
  product1:{
    name:'aceite',
    price:1800
  },
  product2:{
    name:'arroz',
    price:2000
  },
  product3:{
    name:'papa',
    price:1300
  },
  product4:{
    name:'huevos',
    price:1800
  },
  product5:{
    name:'chocolate',
    price:5000
  },
  product6:{
    name:'leche',
    price:3500
  },
  product7:{
    name:'tomate',
    price:2000
  },
  product8:{
    name:'pan',
    price:1000
  },
  product9:{
    name:'mantequilla',
    price:4700
  },
}

let input = document.getElementById("formulario_producto");

input.addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
   event.preventDefault();
   document.getElementById("search").click();
  }
});


function printProducts() {
    
    let lista=document.getElementById("listado_ul"); 
    let linew, contenido;

    lista.innerHTML="";

    for (const product in products) {

        linew= document.createElement("li");        
        contenido = document.createTextNode(`${products[product].name}`);
        linew.appendChild(contenido);       
        lista.appendChild(linew);
       

    }
}

function searchProduct() {

    // let elem = prompt(`Digite el produto a buscar:`);
    let elem = document.getElementById('formulario_producto').value;
    let precio=document.getElementById("precio");
    let contador=0;

    for (const product in products) {
        
        if((products[product]['name'])===elem){

           precio.innerInnerHTML=`El producto <span>${(products[product].name).toUpperCase()}</span> cuesta <span>$${products[product].price}</span> pesos.`;
            contador++;
        }

    }
    if(contador===0){
        precio.innerHTML=`<span>Lo lamento, no se encontro el producto.</span>`;
    }
}



