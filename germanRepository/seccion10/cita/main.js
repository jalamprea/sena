

let array = [
    {
        nombres:'Carlos Augusto',
        apellidos: 'Aranzazu Jinete',
        documento:'80002098',
        fecha:'2021-07-02T18:00'
    },
    {
        nombres:'Yaneth Omaira',
        apellidos: 'Ardila Plata',
        documento:'1234',
        fecha:'2021-07-24T07:30'
    },
    {
        nombres:'Juan Pablo',
        apellidos: 'Rodriguez Aranzazu',
        documento:'5678',
        fecha:'2021-07-22T13:40'
    }
];

let documento = document.getElementById('documento');


let titulo = document.querySelector('.card-title');
let texto = document.querySelector('.card-text');
let apellidos = document.querySelector('#apellidos');
// let fecha = document.querySelector('.footer');
let fecha2 = document.querySelector('#meeting-time');
let boton_fecha = document.querySelector('#cambio_fecha');


documento.addEventListener("keydown", function(event) 
{
   
    
  if (event.key === 'Enter') 
  {

   event.preventDefault();

   let counter = 0;
   
   
     for (const persona in array) 
     {

         if((array[persona]['documento'])===documento.value)
         {
    
            
            titulo.innerHTML = `<h5><span>Nombres:</span></h5> <span class="badge bg-secondary ">${array[persona].nombres}</span>`;

            apellidos.innerHTML = `<h5><span>Apellidos:</span></h5> <span class="badge bg-secondary ">${array[persona].apellidos}</span>`;

            texto.innerHTML = `<h5><span>Documento:</span></h5> <span class="badge bg-danger">${array[persona].documento}</span>`;

            // fecha.innerHTML = `<h5>Fecha de la cita: <span class="badge bg-danger">${array[persona].fecha}</span></h5>`;

            fecha2.value = `${array[persona].fecha}`;
            counter++;
        }  
     }

     if(counter ===0){
         
         Swal.fire({
            title: 'Error!',
            text: 'Documento no encontrado o inexistente',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        })
     }
  }
});

// fecha.addEventListener("click", function(event) {
//   //console.log(documento.value);

//   for (const persona in array) {

//          if((array[persona]['documento'])===documento.value){
    
//             // alert(array[persona]['ciudad']);

//             array[persona]['fecha']=prompt('Cambiar fecha:');
//              fecha.innerHTML = `<h5>Fecha de la cita: <span class="badge bg-danger">${array[persona].fecha}</span></h5>`;
            
//         }  
//      }
// });

fecha2.addEventListener("change", function(event) {
  //console.log(documento.value);

  boton_fecha.disabled = false;
    
});

boton_fecha.addEventListener("click", function(event) {
  
    
    for (const persona in array) {

         if((array[persona]['documento'])===documento.value){
    
            // alert(array[persona]['ciudad']);

            array[persona]['fecha']=fecha2.value;
            fecha2.innerHTML = `${array[persona].fecha}`;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se han guardado los cambios',
                showConfirmButton: false,
                timer: 1500
            })
            boton_fecha.disabled = true;           
            
        }  
     }


});
