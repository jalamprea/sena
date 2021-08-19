function initial(n,m){

    let value = 0;
    // let rows = [1,2,3,4,5,6,7,8];
    // let columns = [a,b,c,d,e,f,g,h] 
    let chess=[[],[]];

    //let array_1 = [[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8]];


  
    let container = document.getElementById("container");

    container.innerHTML="";
      
    let table   = document.createElement("table");
    // console.log(chess);
    for ( let i = 0; i < n; i++) {
        
        let row = document.createElement("tr");

        for ( let j = 0; j < m; j++) {
        
            let cell = document.createElement("td");
        
            row.appendChild(cell);
            
            
            if(i===0 && ((j===0)||(j===7))){
                //Torre negra (B-R)
                cell.innerHTML="&#9820;";
                chess[i][j]='B-R';
            }
            if(i===0 && ((j===1)||(j===6))){
                //Caballo negro (B-N)
                cell.innerHTML="&#9822;";
                chess[i][j]='B-N';
            }
            if(i===0 && ((j===2)||(j===5))){
                //Alfil negro (B-B)
                cell.innerHTML="&#9821;";
                chess[i][j]='B-B';
            }
            if(i===0 && j===3){
                //Rey negro (B-K)
                cell.innerHTML="&#9819;";
                chess[i][j]='B-K';
            }
            if(i===0 && j===4){
                //Reina negra (B-Q)
                cell.innerHTML="&#9818;";
                chess[i][j]='B-Q';
            }
            if(i===1){
                //Peon negro (B-P)
                cell.innerHTML="&#9823;";
                chess[i][j]='B-P';
            }

             
            
            if(i===6){
                 //Peon blanco (W-P)
                cell.innerHTML="&#9817;";
                chess[i][j]='W-P';
            }

            if(i===7 && ((j===0)||(j===7))){
                 //Torre blanca (W-R)
                cell.innerHTML="&#9814;";
                console.log(chess);
                chess[i][j]='W-R';
            }
            if(i===7 && ((j===1)||(j===6))){
                //Caballo blanco (W-N)
                cell.innerHTML="&#9816;";
                chess[i][j]='W-N';
            }
            if(i===7 && ((j===2)||(j===5))){
                //Alfil blanco (W-B)
                cell.innerHTML="&#9815;";
                chess[i][j]='W-B';
            }
            if(i===7 && j===3){
                //Rey blanco (W-K)
                cell.innerHTML="&#9813;";
                chess[i][j]='W-K';
            }
            if(i===7 && j===4){
                //Reina blanca (W-Q)
                cell.innerHTML="&#9812;";
                chess[i][j]='W-Q';
            }
           
            // if(i>=2||i<=5){
            //     chess[i][j]='#'
            // }
           
          
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

