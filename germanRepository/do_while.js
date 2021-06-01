function alerta()
    {
    var mensaje;
    var opcion = confirm("Clicka en Aceptar o Cancelar");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;
}


/*
7. Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se introduzca el cero.
*/

function promedio()
    {
        
    let numero;
    let contador = 0;
    let suma=0;
    let promedio = 0;

    do {

        numero  = parseFloat(prompt("Digite numero"));
        suma = numero + suma;
        
        contador = contador + 1;
           
    } while (numero != 0);

    promedio = suma/(contador-1);
    
    console.log(`El promedio es ${promedio}`)
}