/*
2. Cree un programa que almacene los documentos y nombres de diez usuarios, donde a cada documento corresponda su respectivo nombre. Use diccionarios. Imprima todos los nombres de los usuarios usando ciclos.
*/

let document_user, name_user, document, user = ''; 

const myArray = [];

for(let i = 0; i < 2; i++){

    document_user = prompt(`Enter your ID:`);
    name_user = prompt(`Enter you name:`);

    myArray.push({

        document: document_user,
        name:name_user
    });

}

for(let i = 0; i < myArray.length; i++){

   console.log(myArray[i].name);

}