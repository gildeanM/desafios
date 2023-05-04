
var projetos = [];
var cadastrado = false;
var id;

function registrar(){
    var projeto = document.getElementById("projeto").value;
    var numHoras = document.getElementById("numHoras").value;
    var estado = String(document.getElementById("estado").value);
    id = 0;

    
    if(estado == "true"){
        estado = "FEITO";
    }else if(estado == "false"){
        estado = "A FAZER";
    }else if(estado == "false2"){
        estado = "FAZENDO";
    }

   

    if(projetos.length >= 1){
        for(; id < projetos.length; id++){
            
        cadastrado = projetos[id].projeto == projeto;
        if(cadastrado){
            break;
        }

        }
    }

    if(projetos.length == 0){
        projetos.push({
            projeto: projeto,
            numHoras: numHoras,
            estado: estado
        })
    }else if(!(cadastrado && projetos.length >= 1)){
        projetos.push({
            projeto: projeto,
            numHoras: numHoras,
            estado: estado
        })
        
    }else if(cadastrado){
        projetos[id].estado = estado;
    }

    tabRegistro(projetos,cadastrado,id);
}


function tabRegistro(projetos,cadastrado,mudarEstado){
  
        const tab = document.getElementById("tab");
        
        id = 0;
        for(; id < projetos.length; id++){
            if(projetos.length == 0){
                
                const line = document.createElement("tr");
                var cellProjeto = document.createElement("td");
                var cellNumHoras = document.createElement("td");
                var cellEstado = document.createElement("td");
                cellEstado.setAttribute("id", id);
                


                cellProjeto.textContent = projetos[id].projeto;
                cellNumHoras.textContent = projetos[id].numHoras;
                cellEstado.textContent = projetos[id].estado;

                
                tab.appendChild(line).appendChild(cellProjeto);
                tab.appendChild(line).appendChild(cellNumHoras);
                tab.appendChild(line).appendChild(cellEstado);

             
            }else if(!(cadastrado && projetos.length >= 1) && id == (projetos.length - 1 )){

                const line = document.createElement("tr");
                var cellProjeto = document.createElement("td");
                var cellNumHoras = document.createElement("td");
                var cellEstado = document.createElement("td");
                cellEstado.setAttribute("id", id);
                
                

                cellProjeto.textContent = projetos[id].projeto;
                cellNumHoras.textContent = projetos[id].numHoras;
                cellEstado.textContent = projetos[id].estado;
                
                tab.appendChild(line).appendChild(cellProjeto);
                tab.appendChild(line).appendChild(cellNumHoras);
                tab.appendChild(line).appendChild(cellEstado);
              
            }
            if(cadastrado){
                document.getElementById(id).innerHTML = projetos[id].estado;
                
            }
            
        }
        
    
}

