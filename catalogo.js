const cards = document.querySelector(".img")
const cadastrar = document.querySelector(".cadastrar")

var emaillogado;
femaillogado();

function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        if(elemento.email == emaillogado){
        let divcard = document.createElement("div");
        divcard.innerHTML = `<div class="card">
        <img src="imagem/${elemento.foto}" alt="">
        <div class="cardbtn">
        <p>${elemento.nome}</p>
        <div class="info">
            <img src="imagem/cancel.png" alt="Excluir" onclick="excluir(${indice})">
            <img src="imagem/shufflesa.png" alt="editar" onclick="editar(${indice})">
        </div>
        </div>
        
    </div>`;

        cards.appendChild(divcard);}
        
    });
}

carregarCatalogo();

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function editar(indice){
    var url ="cadasitem.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}

cadastrar.onclick = () =>{
    window.location.assign("cadasitem.html");
}
function femaillogado(){
    let dados = JSON.parse(sessionStorage.getItem("logado"));
    if (dados == null){
       window.location.assign("login.html");
    } else{
       emaillogado = dados[0].email;
    }
 }
