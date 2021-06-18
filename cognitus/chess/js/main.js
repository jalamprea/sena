function tableGenerator(n,m){

    let value = 0;
    // let rows = [1,2,3,4,5,6,7,8];
    // let columns = [a,b,c,d,e,f,g,h] 
    
  
    let container = document.getElementById("container");

    container.innerHTML="";
      
    let table   = document.createElement("table");
  
    for ( let i = 0; i < n; i++) {
        
        let row = document.createElement("tr");

        for ( let j = 0; j < m; j++) {
        
            let cell = document.createElement("td");
        
            row.appendChild(cell);
            
            //cell.HTMLElementObject.id = `a${i}${j}`;
            if(i===0 && ((j===0)||(j===7))){
                cell.innerHTML="&#9820;";
            }
            if(i===0 && ((j===1)||(j===6))){
                cell.innerHTML="&#9822;";
            }
            if(i===0 && ((j===2)||(j===5))){
                cell.innerHTML="&#9821;";
            }
            if(i===0 && j===3){
                cell.innerHTML="&#9819;";
            }
            if(i===0 && j===4){
                cell.innerHTML="&#9818;";
            }
            if(i===1){
                cell.innerHTML="&#9823;";
            }

            /////////////////////////////////
            if(i===7 && ((j===0)||(j===7))){
                cell.innerHTML="&#9814;";
            }
            if(i===7 && ((j===1)||(j===6))){
                cell.innerHTML="&#9816;";
            }
            if(i===7 && ((j===2)||(j===5))){
                cell.innerHTML="&#9815;";
            }
            if(i===7 && j===3){
                cell.innerHTML="&#9813;";
            }
            if(i===7 && j===4){
                cell.innerHTML="&#9812;";
            }
            if(i===6){
                cell.innerHTML="&#9817;";
            }
          
            if(value%2!=0){    
                cell.setAttribute("class", "democlass");
                
                
               
                
            }
            value++;
            //debugger;
            
        }
        value++;

        table.appendChild(row);
    }

    container.appendChild(table);
  

}

function chessPieces(){
    
    let rows = [1,2,3,4,5,6,7,8];
    let columns = [a,b,c,d,e,f,g,h] 

    let table = document.getElementById('table');

}

/////////////////

var escaques, padre, hijo, moviendo; 
var trebejos0 = ["♖","♘","♗","♕","♔","♗","♘","♖"];
var trebejos1 = "♙"; 

function tablero() {
escaques = document.getElementById("tablero"); 
for(e=0; e<8; e++) {
var fila = escaques.insertRow(); 
for(c=0; c<8; c++){
var celda = fila.insertCell(); 
if(e==0) celda.innerHTML = "<span class=negras>"+trebejos0[c]+"</span>"; 
else if(e==1) celda.innerHTML = "<span class=negras>"+trebejos1+"</span>"; 
else if(e==6) celda.innerHTML = "<span class=blancas>"+trebejos1+"</span>"; 
else if(e==7) celda.innerHTML = "<span class=blancas>"+trebejos0[c]+"</span>"; 
}
}

var movible = document.querySelectorAll("td"); 
for(m=0; m<movible.length; m++) {
movible[m].setAttribute("onclick", "juega(this)", false);
}

}

function juega(T) {

var elementos = document.querySelectorAll("table, table span"); 

if(!moviendo && T.firstElementChild){
padre = T; 
hijo = T.innerHTML; 

for(i=0; elementos[i]; i++) elementos[i].classList.add("mano"); 

T.querySelector("span").style.opacity = ".4"; 

moviendo = true; 
}

else if(moviendo){
padre.innerHTML = ""; 
T.innerHTML = hijo; 

for(i=0; elementos[i]; i++) elementos[i].classList.remove("mano"); 

moviendo = false; 
}


}

onload = tablero; 
