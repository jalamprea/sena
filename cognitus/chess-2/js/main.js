// import mod from 'pieces';


let chess = [];

function initial(n,m){

    let value = 0;

    let container = document.getElementById("container");

    container.innerHTML="";
      
    let table   = document.createElement("table");
    // console.log(chess);
    for ( let i = 0; i < n; i++) {
        
        let row = document.createElement("tr");
        chess[i]=[];

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

            // if(i>=2 || i<=5)chess[i][j]='#';
              if(i>=2||i<=5 && chess[i][j]==''){
                chess[i][j]='#'
            }

            if(i===6){
                 //Peon blanco (W-P)
                cell.innerHTML="&#9817;";
                chess[i][j]='W-P';
            }

            if(i===7 && ((j===0)||(j===7))){
                 //Torre blanca (W-R)
                cell.innerHTML="&#9814;";
                // console.log(chess);
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

            // Atributos de cada celda
            cell.setAttribute("id", `${i}-${j}`);
            cell.dataset.fila = i
            cell.dataset.col = j
           
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
    console.log(chess);

    table.addEventListener("click", captura_click, false);

}

function chessPieces(){
    
    let rows = [1,2,3,4,5,6,7,8];
    let columns = [a,b,c,d,e,f,g,h] 

    let table = document.getElementById('table');

}

let fichaAnterior = null
let turnoActual = "W";

function captura_click(e) {
    
    const fichaDOM = e.path[0];

    // Valida si es el turno correcto
    if (!validarTurno(fichaDOM)) {
        console.log('no es tu turno aun!')
        return;
    }

    // validar si di click sobre una ficha que ya estaba seleccionada
    if (fichaDOM.classList.contains('fichaHover')) {
        return false;
    }


    if ( fichaDOM.innerHTML!="" ) {
        seleccionarFicha(fichaDOM)

    } else if(e.path[0].innerHTML===""){
        ponerFicha(fichaDOM)
    
    }
}

function obtenerEstadoFicha(fichaDOM) {
    const f = fichaDOM.dataset.fila
    const c = fichaDOM.dataset.col

    return chess[f][c]
}

function esMiFicha(fichaDOM) {
    return obtenerEstadoFicha(fichaDOM).indexOf(turnoActual)===0
}

function seleccionarFicha(fichaDOM) {

    // Valida si no estoy dando click sobre otra pieza mia
    if (fichaAnterior && esMiFicha(fichaDOM)) {
        return false;
    }
    else if (fichaAnterior ) {
        // Validar si estoy es comiendo otra ficha
        ponerFicha(fichaDOM)
    }


    fichaDOM.classList.add('fichaHover')
    fichaAnterior = fichaDOM

    // poner efecto de click
    fichaDOM.classList.add('clicked')
    setTimeout(function(){
        fichaDOM.classList.remove('clicked')
    }, 200)
}

function actualizarEstado(fichaDOM, fichaAnterior) {
    const newF = fichaDOM.dataset.fila
    const newC = fichaDOM.dataset.col

    const oldF = fichaAnterior.dataset.fila
    const oldC = fichaAnterior.dataset.col

    chess[newF][newC] = chess[oldF][oldC]
    chess[oldF][oldC] = ""
}

function ponerFicha(fichaDOM) {
    fichaDOM.innerHTML = fichaAnterior.innerHTML;
    fichaAnterior.innerHTML= "";
    fichaAnterior.classList.remove('fichaHover')
    

    actualizarEstado(fichaDOM, fichaAnterior)

    fichaAnterior = null

    // if (turnoActual==="W") {
    //     turnoActual = "B"
    // } else {
    //     turnoActual = "W"
    // }

    // Condicional ternario:
    turnoActual = (turnoActual==="W") ? "B" : "W"
}

function validarTurno(fichaDOM) {
    if (!fichaDOM) {
        return false
    }

    const f = fichaDOM.dataset.fila
    const c = fichaDOM.dataset.col

    if (!f && !c) {
        return false;
    }

    // Si tengo ya una ficha seleccionada, permito el turno
    if (fichaAnterior!==null) {
        return true
    }

    const nombreFicha = chess[f][c]

    // ficha: W-Q
    // turno: W
    if (nombreFicha.indexOf(turnoActual)===0) {
        return true
    }

    return false
}

// 

// document.querySelectorAll('container').addEventListener("click", captura_click, false);

// var allParas = document.getElementsByTagName("p");

// const artd = document.querySelectorAll('td');
// // articleImgs.addEventListener('click', captura_click)
// 


