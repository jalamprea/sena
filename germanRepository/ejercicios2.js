/*
1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

function triangulo(){

    let angulo1 = parseFloat(prompt("Por favor ingrese el primer ángulo"));
    let angulo2 = parseFloat(prompt("Por favor ingrese el segundo ángulo"));
    let angulo3 = parseFloat(prompt("Por favor ingrese el tercero ángulo"));

    let suma = angulo1 + angulo2 + angulo3;

    if (suma===180){
        console.log(`Es un triangulo`);
    }else{
        console.error(`No es un triangulo la suma los angulos es ${suma}, debe ser 180`);
    }

    console.info("El triángulo se obtiene de dividir un paralelogramo en dos, donde la de diagonal de éste pasa a ser la hipotenusa del triángulo. Como la suma de los ángulos interiores de un paralelogramo es 360º entonces si el triángulo es la mitad de éste, sus ángulos sumarían 180º.");

    switch(suma) {
        case 180:
            console.log(`Es un triangulo`);
            break;
    
        default:
            console.error(`No es un triangulo`);
    }
}


/*
2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales y otra con estructura switch-case.
*/

function par() {
    
    let numero = parseInt(prompt("Por favor ingrese un numero"));

    let residuo = numero % 2

    if (residuo === 0){
        console.log("Es par");
    }else{
        console.log("Es impar");
    }

    switch(residuo) {
        case 0:
            console.log(`Es par`);
            break;
    
        default:
            console.log(`Es impar`);
    }
}



/*
3. Cree un programa que lea un número y muestre si este  es divisible entre cinco o no. Realice una versión con condicionales y otra con estructura switch-case
*/

function divisibleCinco() {
    
    let numero = parseInt(prompt("Por favor ingrese un numero"));

    let residuo = numero % 5

    if (residuo === 0){
        console.log("Es divisible por 5");
    }else{
        console.log("No es divisible por 5");
    }

    switch(residuo) {
        case 0:
            console.log("Es divisible por 5");
            break;
    
        default:
            console.log("No es divisible por 5");
    }
}


/*
4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

function esPrimo(numero) {
    
    //let numero = parseInt(prompt("Por favor ingrese un numero entero"));

    let contador = 0;

    for(let i = 1; i <= numero; i++)
    {
        if (numero % i === 0)
        {
            contador = contador + 1;
        };   
    }


    if (contador ===2)
    {
        return true;
    }
    
    return false;

    // switch(contador) 
    // {
    //     case 2:
    //         console.log("Es primo");
    //         break;
    
    //     default:
    //         console.log("No es primo");
    // }
}
