/*
Cree un programa que declare e inicialice una variable para almacenar los 48.5 dólares que cuesta FIFA18, una variable para almacenar la letra z y otra para almacenar un estado lógico verdadero. Imprima cada una de las variables.  Haga pseudocódigo y código.
*/

function fifa18(params) {

    return params;

}


/*
Cree un programa que declare e inicialice una constante que almacene el número pi y otra que almacena la URL de Google. Imprima cada una de las variables. Haga pseudocódigo y código.
*/

function googlePi(params="pi") {

    if(params==="pi"){

        const numeroPi = Math.PI;

    return numeroPi ;

    }
    if(params==="google"){

        const google ="https://www.google.com/";
        
        return google;
    }

}

/*
Cree un programa que declare e inicialice una variable con el valor 50, e imprima tal variable cuatro veces.
*/

function imprimirNumero(){

    let numero = 50;
    let numero2  = 100;

    return {
        numero, numero2
    }
    

}

function mi_funcion(parametro1, parametro2){

   //queremos que parametro1 tenga por defecto el valor 33

   parametro1 = parametro1 || 33;

   //queremos que parametro2 tenga por defecto el valor false

   parametro2 = parametro2 || false;



}
