/*
1. Cree un programa que implemente un arreglo de cuatro elementos(números del 0 al 3) e imprima cada uno en líneas diferentes.
*/



function elementos(array){
  array.forEach((elem)=>{
      console.log(elem);
  });

}

/*
2. Cree un programa que implemente un arreglo de 10 elementos(los dígitos), ordenados de menor a mayor e imprima cada uno de ellos en el mismo orden en el que se encuentran en el arreglo. Luego, invierta el orden de todos los elementos del arreglo, haciendo que el último pase a ser el primero, el penúltimo pase a ser el segundo, así sucesivamente, e imprima nuevamente cada elemento en el mismo orden en el que ahora se encuentran en el arreglo.
*/

function invertir(array){

    for(let i = 0 ; i < array.length; i++){
        console.log(array[i]);
    }

    for(let i = array.length-1 ; i >= 0; i--){
        console.log(array[i]);
    }

}

/*
3. Dado el arreglo [1,2,3,4,5,6]
● Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
● Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
● Mostrar todos los elementos dentro del arreglo sumándole uno a cada uno.
● Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
● Calcular el promedio de todos los elementos del arreglo
*/

function ciclos(array){

    let i = 0;
    let sum = 0;
    let avg = 0;
    
    while (i<array.length) {
     
     console.log(array[i]);
     i++;

    }

    for(let i = 0 ; i < array.length; i++){
        console.log(array[i]);
    }

    for(let i = 0 ; i < array.length; i++){
        console.log(array[i]+1);
    }

    for(let i = 0 ; i < array.length; i++){
        sum = sum + array[i];
        
    }
    avg = sum/array.length;
}





