var estoque = [];
var emEstoque = false;
var id = 0;


function setEstoque(){
    var produto = document.getElementById("produto").value;
    var quantidade = parseInt(document.getElementById("quantidadeProduto").value);
   
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

    var save = estoque;

    return save;
}

console.log(save)

function setVenda(){
    var produtoVendido = document.getElementById("produtoVendido").value;
    var quantidadeVendida = parseInt(document.getElementById("quantidadeVendida").value);

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


// window.onload = function pageEstoque(){
   
    
//     if(estoque.length > 0){
        
//         console.log(estoque)

//     }else{

//         document.getElementById("estoquePage").innerHTML = "abcd";

//     }

// }