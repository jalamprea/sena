/*
Cree un programa que declare e inicialice una variable para almacenar los 48.5 dólares que cuesta FIFA18, una variable para almacenar la letra z y otra para almacenar un estado lógico verdadero. Imprima cada una de las variables.  Haga pseudocódigo y código.
*/

//Un comentario de una sola linea.

// let fifa18 = 48.5;
// let letra = "Z";
// let estado = true;

// console.log("El valor del juego Fifa18 es: " + fifa18 + " dolares");
// console.log("El valor de la letra almacenada es: " + letra);
// console.log("El valor lógico almacenado es: " + estado);


/*
Cree un programa que declare e inicialice una constante que almacene el número pi y otra que almacena la URL de Google. Imprima cada una de las variables. Haga pseudocódigo y código.
*/

// const PI = Math.PI;
// const URLGOOGLE = "https://www.google.com/";

// console.log(PI);
// console.log(URLGOOGLE);

/*
Cree un programa que declare e inicialice una variable con el valor 50, e imprima tal variable cuatro veces.
*/

// let numero = 50;

// console.log(numero);
// console.log(numero);
// console.log(numero);
// console.log(numero);

/*
Cree un programa que pida al usuario el valor de la gravedad terrestre en m/s^2, guarde tal valor en una constante y a continuación imprima un mensaje al usuario confirmando el valor de la gravedad introducida.
*/

// const GRAVEDAD = prompt("Digite el valor de la gravedad");

// alert(GRAVEDAD);

//let mensaje="";



// var opcion = confirm("Clicka en Aceptar o Cancelar");
//     if (opcion == true) {
//         mensaje = "Has confirmado el valor de la gravedad";
//     } else {
//         mensaje = "No has confirmado el valor de la gravedad";
//     }
//     alert("El valor seleccionado es: "+ mensaje)
// confirm("¿El valor de la gravedad es?: " + GRAVEDAD);

/*
Cree un programa que pida al usuario su edad, domicilio y estado civil, a continuación, confirme al usuario los valores introducidos por éste.
*/

// let edad = prompt("Por favor digite su edad:");
// let domicilio = prompt("Por favor digite su domicilio:");
// let estadoCivil = prompt("Por favor digite su estado civil:");

//  alert("Su edad es  " + edad + 
//  ", su domicilio es "+ domicilio +"\n" +
//  "su estado civil es "+ estadoCivil);

 /*
 Cree un programa que pida al usuario la fecha de su nacimiento, almacene tal valor en una constante e imprima un mensaje al usuario notificando el día de su cumpleaños.
 
 */

//  const fechaNacimiento = prompt("Por favor digita tu fecha de nacimiento:");

// //  26/08/1998

// const ELEMENTOS = fechaNacimiento.split("/");

// // console.log(elementos[0]);
// // console.log(elementos[1]);
// // console.log(elementos[2]);

// alert("Su cumpleaños es el " + ELEMENTOS[0] + " del mes " + ELEMENTOS[1]) ;

//  salida = Su cumpleaños es el 26 de 08;

/*
1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario dentro
de tantos años como este indique. Por ejemplo, si el usuario tiene 20 años y quiere saber cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.
*/

function ejercicio1() {  
  
  let edad = parseInt(prompt("Por favor indique su edad"));
  let lapso = parseInt(prompt("Por favor indique el numero de años"));
  let total = edad + lapso;

  return (`Usted tiene ${edad} años y tendra en ${lapso} años ${total} años`);
}


 /*
 2. Cree un programa que lea dos números y muestre su producto, su cociente, su suma y su resta.
 */
  function validateNumber() {
    if (isNaN(number)) {
      return Number.NaN;
    }
    return number;
  }


  function ejercicio2(){

    let numero1 = parseFloat(prompt("Por favor dame el primer numero"));
    let numero2 = parseFloat(prompt("Por favor dame el segundo numero"));

    console.log(validateNumber(numero1));
    return 0;

    if((typeof numero1 != 'number') || (typeof numero2 != 'number')) return false;
    
    console.log(typeof numero1);
    console.log(numero1);

    let operacion = 0;

    operacion = numero1 + numero2;
    console.log(`La suma de los numeros ${numero1} y ${numero2} es ${operacion}`);

    operacion = numero1 - numero2;
    console.log(`La resta de los numeros ${numero1} y ${numero2} es ${operacion}`);

    operacion = numero1 * numero2;
    console.log(`La multiplicación de los numeros ${numero1} y ${numero2} es ${operacion}`);

    numero2===0 ? 
    console.log("Esta división es indeterminada"):
    (operacion = numero1/numero2,
    console.log(`La división de los numeros ${numero1} y ${numero2} es ${operacion}`));
    
}

 /*
3. Cree un programa que lea el monto de un préstamo y el plazo en meses, y muestre al usuario el valor de las cuotas mensuales pagando un interés fijo del 2.7% mensual.
 */


// let montoPrestamo = parseInt(prompt("Por favor dame el monto del prestamo"));;
// let plazoMeses = parseInt(prompt("Por favor dame el numero de meses"));

// let interes = (montoPrestamo * 2.7)/100;

// let mensual = montoPrestamo/plazoMeses;

// let totalMes = mensual + interes;

// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2
// })


// for(i=1;i<=plazoMeses;i++){

//     document.write(`La cuota numero ${i} es de  ${formatter.format(Math.round(totalMes))} pesos <br>`);

// }

/*
1. Cree un programa que tome la base y la altura de un triángulo e imprima su área.*/

// let base = parseFloat(prompt("Por favor digite la base"));
// let altura = parseFloat(prompt("Por favor digite la altura"));

// let area = (base * altura)/2;

// console.log(area);

// /**
// 2. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
// **/
// let radio = parseFloat(prompt("Por favor digite el radio del circulo"));

// let area = Math.round(Math.PI * Math.pow(radio, 2));

// let perimetro = Math.round(2 * Math.PI * radio);


// console.log(`El area del circulo de radio ${radio} es ${area}, y su perimetro es ${perimetro}`);


// /*
// 3. Cree un programa que tome el lado de un cubo e imprima su volumen. 
// */
// let lado = parseFloat(prompt("Por favor digite uno de los lados del cubo"));

// let volumen = Math.pow(lado,3);


// alert(`El volumen del cubo cuyo lado es ${lado}, es ${volumen}`);

// /*
// 4. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.
// */
// let precio = parseFloat(prompt("Por favor digite el precio del producto"));

// let valorTotal = precio + (precio * 19)/100;

// console.log(`El valor total del articulo es ${valorTotal}`);

// /*
// 5. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.
// */
// let precio = parseFloat(prompt("Por favor digite el precio del producto"));

// let valorTotal = precio - (precio *10)/100;

// console.log(`El valor total del articulo es ${valorTotal}`);
// /*
// 6. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.
// */

// let cantidad = parseFloat(prompt("Por favor digite un cantidad"));
// let porcentaje = parseFloat(prompt("Por favor digite el porcentaje"));

// let totalPorcentaje = (cantidad*porcentaje)/100;

// console.log(`El ${porcentaje}% de ${cantidad} es ${totalPorcentaje}`);

// /*
// 7. Cree un programa que tome un número real e imprima su valor absoluto.
// */

// let numero = (prompt("Por favor digite un numero"));


// console.log(typeof (numero));



// let valorAbsoluto = Math.abs(numero);

// console.log(`El valor absoluto de ${numero} es ${valorAbsoluto}`);

// if(numero>=0)
// {
//   console.log(`El valor absoluto de ${numero} es ${numero}`);
// }else
// {
//   numero = numero * (-1);
//   console.log(`El valor absoluto de ${numero * (-1)} es ${numero}`);
// }


// function mostrar () {

//   let numero = 5;

//   let total = numero + numero;

//   return console.log(total);

// }

// mostrar();







