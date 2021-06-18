//DICCIONARIOS (OBJETOS EN JAVASCRIPT)
//ES UNA ESTRUCUTRA DE DATOS CONFORMADA
//POR PARES LLAVE-VALOR(EN JAVASCRIPT PROPIEDAD-VALOR)

//DEFINICION
//las llaves pueden ser enteros, cadenas, variables
//loa valores pueden ser enteros, cadenas, objetos, arreglos etc
//aca la llave papa se crea por referencia
let varios = {"arroz": 2000, 10: "diez", papa: 1800};

//lectura
//primera sintaxis usando el operador punto
//no la usamos con llaves que sean enteros
console.log("----lectura sintaxis 1___________");
console.log(varios.arroz);
console.log(varios.papa);
console.log("----lectura sintaxis 2___________");
//segunda sintaxis corchetesz
//se ponen las llaves entre comillas
//asi la propiedad o llave se haya definido por referencia
console.log(varios["arroz"]);
console.log(varios["papa"]);

//asignacion
//creamos un nuevo par llave-valor
varios["aceite"] = 5000;
console.log("Diccionario con nueva clave: ", varios);
//asignamos un nuevo valor a la llave arroz
varios["arroz"] = 2500;
console.log("Diccionario con llave arroz modificada: ", varios);

//borrado: primera sintaxis
delete varios["arroz"];
console.log("Diccionario con llave arroz eliminada: ", varios);

//recorrido
//usamos for in, obtenemos las llaves del diccionario
for (const key in varios) {
    console.log("Llave: ", key);
    console.log("Valor", varios[key]);
}



