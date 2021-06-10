function moneda(x){

    let resto = 0;

    let monedas = [500, 200, 100, 50, 20, 10, 5, 2, 1];

    for(i = 0; i < monedas.length; i++) {
        
        if(x >= monedas[i]) {
            
            resto = Math.trunc(x/monedas[i]);
           
            if(monedas[i] > 2){
                console.log(`${resto} billete(s) de ${monedas[i]} euros`);
            }
            
            if(monedas[i] === 2){
                console.log(`${resto} moneda(s) de ${monedas[i]} euros`);
            }
            if(monedas[i] === 1){
                console.log(`${resto} moneda de ${monedas[i]} euro`);
            }
            
            x = (x % monedas[i]); 
        }
    }

    return 0;  
}