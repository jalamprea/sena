function tableGenerator(n,m){

    let value = 0;
  
    let container = document.getElementById("container");
      
    let table   = document.createElement("table");
  
    for (let i = 0; i < n; i++) {
        
        let row = document.createElement("tr");

        for (let j = 0; j < m; j++) {
        
            let cell = document.createElement("td");
        
            row.appendChild(cell);
            // cell.documentElement.innerHTML = "&#9812";
            // cell.appendChild(textCell);
            if(value%2!=0){    
                cell.setAttribute("class", "democlass");
            }
            value++;
            // debugger;
        }
        value++;

        table.appendChild(row);
    }

    container.appendChild(table);
  

}