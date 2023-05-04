var estoque = [];
var emEstoque = false;
var id;


function setEstoque(){
    var produto = document.getElementById("produto").value;
    var quantidade = parseInt(document.getElementById("quantidadeProduto").value);
   
    id = 0;

    if(estoque.length >= 1){
        for(; id < estoque.length; id++){
            
        emEstoque = estoque[id].produto == produto;
        if(emEstoque){
            break;
        }

        }
    }

    if(estoque.length == 0){
        estoque.push({
            id: estoque.length,
            produto: produto,
            quantidade: quantidade
        })
    }else if(!(emEstoque && estoque.length >= 1)){
        estoque.push({
            id: estoque.length,
            produto: produto,
            quantidade: quantidade
        })
        
    }


    console.log(estoque);
   return estoque;

}



function setVenda(){
    if(estoque.length > 0){
    var produtoVendido = document.getElementById("produtoVendido").value;
    var quantidadeVendida = parseInt(document.getElementById("quantidadeVendida").value);


    
    id = 0;

   
    for(; id < estoque.length; id++){

        if(estoque[id].produto == produtoVendido){
            
            
            estoque[id].quantidade = estoque[id].quantidade - quantidadeVendida;
            break;
        }

    }

    document.getElementById("newId").innerHTML = `ID ${estoque[id].id}`;
    document.getElementById("newProduto").innerHTML = `PRODUTO ${estoque[id].produto}`;
    document.getElementById("newQuantidade").innerHTML = `QUANTIDADE ${estoque[id].quantidade}`;
    
    
    }
    
    console.log(estoque);
   
    
}






    
