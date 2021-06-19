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
}


function printProducts() {
    
    let lista=document.getElementById("listado"); 
    let linew, contenido;

    lista.innerHTML="";

    for (const product in products) {

        linew= document.createElement("li");        
        contenido = document.createTextNode(`${products[product].name}`);
        lista.appendChild(linew);
        linew.appendChild(contenido);

    }
}

function searchProduct() {

    let elem = prompt(`Digite el produto a buscar:`);
    let precio=document.getElementById("precio");
    let contador=0;

    for (const product in products) {
        
        if((products[product]['name'])===elem){

           precio.innerHTML=`El producto <span>${(products[product].name).toUpperCase()}</span> cuesta <span>$${products[product].price}</span> pesos`;
            contador++;
        }

    }
    if(contador===0){
        precio.innerHTML=`<span>Lo lamento no se encontro el producto</span>`;
    }
}



