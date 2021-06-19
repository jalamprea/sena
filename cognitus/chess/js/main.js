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

