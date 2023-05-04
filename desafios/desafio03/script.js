var titulo;
var anoL;
var diretor;
var genero;
var nomeE;
var papelE;


function setObject(){

    titulo = document.getElementById("titulo").value;
    anoL = document.getElementById("anoL").value;
    diretor = document.getElementById("diretor").value;
    genero = document.getElementById("genero").value;
    nomeE = document.getElementById("nomeE").value;
    papelE = document.getElementById("papelE").value;


    var filmes= {
            titulo:titulo,
            anoL:anoL,
            diretor:diretor,
            genero:genero,
            infoE: {
                nome: nomeE,
                papel:papelE
            },
        
            impremeInfo: function () {
            console.log(this)
            }
            
        
    };

    filmes.impremeInfo();
    seeObject();

}



function seeObject(){

    document.getElementById("seeTitulo").innerHTML = this.titulo;
    document.getElementById("seeAnoL").innerHTML = this.anoL;
    document.getElementById("seeDiretor").innerHTML = this.diretor;
    document.getElementById("seeGenero").innerHTML = this.genero;
    document.getElementById("seeNomeE").innerHTML = this.nomeE;
    document.getElementById("seePapelE").innerHTML = this.papelE;

}