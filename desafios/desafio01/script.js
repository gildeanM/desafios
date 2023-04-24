var estoque = [];

function setEstoque(){
    var produto = document.getElementById("produto").value;
    var quantidade = document.getElementById("quantidadeProduto").value;
    var emEstoque = false;
    var id = -1;

    if(estoque.length == 0){
        estoque.push({
            id: estoque.length,
            produto: produto,
            quantidade: quantidade
        })
    }

    // for(; id < estoque.length-1; id++){
        
    //    emEstoque = estoque[id+1].produto == produto;
    //    if(emEstoque){
    //     break;
    //    }

    // }

    if(estoque.length == 0){

    }else
    if(!emEstoque && estoque.length > 1){
        estoque.push({
            id: estoque.length,
            produto: produto,
            quantidade: quantidade
        })
    }

    console.log(estoque);

}

