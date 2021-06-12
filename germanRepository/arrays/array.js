/*
Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de los cuadrados de sus elementos, luego, imprima el resultado.
*/


function sumSquares(array){
    
    let sum = 0;

    array.forEach((elem)=>{
      sum += Math.pow(elem,2);
    });

    return sum;
}


/*
Cree una función que tenga por parámetro un arreglo de números y muestre el mayor y el menor de ellos.
*/

function maxMin(array){

    let temp = 0;

    for(let i=0; i < array.length; i++) {

        for(let j=0; j < array.length; j++){

            if(array[j] > array[j+1]){
                
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return (`min ${array[0]} - max ${array[array.length-1]}`);
}


/*
Usando Quick Sort
*/

function maxMin2(array){

    if(array.length < 1){
        return [];
    }

    let left = [];
    let right = [];
    let pivot = array[0];

    for(let i=1; i < array.length; i++) {

       if(array[i] < pivot){
           left.push(array[i]);
       }
       else {
           right.push(array[i]);
       } 
    }
    return [].concat(maxMin2(left),pivot,maxMin2(right));
}

/*
Usando operador Spread u operador de propagación
*/

function maxMin3(array){

     return (`min ${Math.min(...array)} - max ${Math.max(...array)}`);
}


/* Concatenar dos arrays en uno
let arrayResultante = [...arra1,...array2];
 */

/* 
Copiar un array dentro de otro
let arrayCopia = [...array]
 */ 

 /* 
 Otra manera de copiar un array
 
 let a = [1,2,3,4,5];

let b = a;
(a===b);//Result true

a = a.map((elem)=>(elem +1));

(a===b);// Result false
  */


let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()

