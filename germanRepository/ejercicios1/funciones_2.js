/*
1. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el promedio de todos los números.
*/

function promedio(){
    
    let a,b;
    
    let suma=0;
    let contador = 0;

    a  = parseInt(prompt("Digite a"));
    b  = parseInt(prompt("Digite b"));

    for(i=a;i<=b; i++){
        //console.log(i);
        suma = suma + i;
        //console.log(`Suma ${suma}`);
        contador=contador+1;
        //console.log(`contador ${contador}`);
    }

    return suma/(contador-1);

}

/*
2. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el mayor de todos.
*/

function max(){

    let a,b;
    
    a  = parseInt(prompt("Digite a"));
    b  = parseInt(prompt("Digite b"));

    return Math.max(a, b);
}

/*
3. Cree una función que imprima el punto medio del intervalo (a, b), con a,b enteros.
*/

function med(){

    let a,b;
    
    a  = parseInt(prompt("Digite a"));
    b  = parseInt(prompt("Digite b"));

    return (b - a) ; 
}