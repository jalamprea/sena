
let usuarios = [
    {
        nombres:'Carlos Augusto',
        apellidos: 'Aranzazu Jinete',
        documento:'80002098',
        user: 'augusto',
        pass: '1234',
        rol:'empleado',
        displonible: false,
        horario:'2021-02-01 00:00:00'

        
    },
    {
        nombres:'Yaneth Omaira',
        apellidos: 'Ardila Plata',
        documento:'1234',
        user:'yaneth',
        pass:'1234',
        rol:'cliente',
        displonible: false,
        horario : '2021-02-01 00:00:00',
       
    },
    {
        nombres:'Juan Pablo',
        apellidos: 'Rodriguez Aranzazu',
        documento:'5678',
        user:'juan',
        pass:'5678',
        rol:'empleado',
        displonible: true,
        horario:'2021-02-01 00:00:00',
    }
];


let empleados = [
    {
        nombres:'ANGELICA MARIA',
        apellidos: 'ROCHA GARCIA',
        documento:'80002098',
        user: '',
        pass: '',
        rol:'empleado',
        disponible: false,
        servicio:'peluqueria',
        horario:'2021-02-01 00:00:00'

        
    },
    {
        nombres:'CAROLINA',
        apellidos: 'PINTOR PINZON ',
        documento:'1234',
        user:'yaneth',
        pass:'1234',
        rol:'cliente',
        disponible: false,
        servicio:'peluqueria',
        horario : '2021-02-01 00:00:00',
       
    },
    {
        nombres:'DENY MARCELA',
        apellidos: 'MUÑOZ LIZARAZO',
        documento:'5678',
        user:'juan',
        pass:'5678',
        rol:'empleado',
        disponible: true,
        servicio:'peluqueria',
        horario:'2021-02-01 00:00:00',
    }
];


let servicios= [
    {
        nombre:'masaje',
        valor : 45000
        
    },
    {
        nombre:'peluqueria',
        valor : 30000
    },
    {
        nombre:'uñas',
        valor : 20000
    }
];

function inicio(){
    let user = prompt("Nombre usuario");
    let pass = prompt("Password");

    login(user,pass);
}

function login(user,pass){
    
     
     for (const usuario in usuarios) 
     {

         if(((usuarios[usuario]['user'])===user)&&((usuarios[usuario]['pass'])===pass))
         {
    
             console.log(`Hola ${user}.`);
             console.log(`Tu rol es ${usuarios[usuario]['rol']}.`);

             if(usuarios[usuario]['rol']==='cliente'){

                 let i=1;

                 for (const servicio in servicios) {
                     console.warn(`Servicio ${i} ${servicios[servicio]['nombre']}`)
                     i++;
                 }
                 
                 let servicio = prompt("Que servicio desea tomar");

                 switch(servicio) {
                    case '1': 
                    console.error("servicio 1");
                        break;
                    case '2':
                        agendar('peluqueria');
                        break;
                    case '3':
                    console.error("servicio 3");
                        break;
                    default:
                    console.error("Ingrese una edad valida");
         
                }
             }
            
        }  
     }
}


function agendar(servicio){
    console.log(`Agendar ${servicio}`);

    for (const empleado in empleados) 
     {
        //  debugger;
         if((empleados[empleado]['disponible']==true)){
             console.log(`El empleado que esta disponible es: ${empleados[empleado]['nombres']} ${empleados[empleado]['apellidos']} y esta disponible el ${empleados[empleado]['horario']}`);
         }
        
            
     }
}


function pagar(){

}

