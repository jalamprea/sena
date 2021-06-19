const products = {
  
  product1:{
    name:'ACEITE',
    price:1800
  },
  product2:{
    name:'ARROZ',
    price:2000
  },
  product3:{
    name:'PAPA',
    price:1300
  },
  product4:{
    name:'HUEVOS',
    price:1800
  },
  product5:{
    name:'CHOCOLATE',
    price:5000
  },
  product6:{
    name:'LECHE',
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

    for (const product in products) {
        
        if((products[product]['name'])===elem){

          alert(`El producto cuesta $${products[product].price} pesos`);
          
        }

    }
}



