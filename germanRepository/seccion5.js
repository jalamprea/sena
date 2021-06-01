/*
1. Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente. Use ciclo for. Use funciones.
*/

function cicloFor(param) 
{ 
    let contadorDesc = param;
    for (let index = 0; index <= param; index++) 
    {
        contadorDesc = param-index;
        document.write (`${index}\t - \t${contadorDesc}<br>`);
        
    }
 }

/*
2. Cree un programa que imprima la tabla de multiplicar del 3, del 0 al 50. Use ciclo for. Use funciones.
*/

function tabla3() {
    
    let multiplicacion =0;
    for(let i = 1; i <=50;i++){
        multiplicacion= 3*i;
        console.log(`3 x ${i} = ${multiplicacion}`);
    }
    
}

/*
3. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funciones.
*/

function promedio(){
    
    const estudiantes = parseInt(prompt("Digite el numero de estudiantes"));
    let notas=[];
    //let uno;

    for(let i =0;i<estudiantes;i++){
        nota = prompt("Digite las notas, separadas por una coma(,)");
        notas=nota.split(",");
        
    }
        console.log(typeof (parseFloat(notas[0])));
        console.log(typeof (parseFloat(notas[1])));
        console.log(typeof (parseFloat(notas[2])));

}

/*
¿Cuál es el máximo valor que puede representarse con 16 bits y un sistema de representación posicional como el
descrito? ¿Qué secuencia de bits le corresponde?
*/

function bits(bits) {

    return Math.pow(2,bits)-1;
    
}



