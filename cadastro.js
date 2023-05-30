const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("inome");
const email = document.getElementById("imail");
const senha = document.getElementById("isenha");

formulario.onsubmit = (evento) =>{
    if (nome.value == ""){
        evento.preventDefault();
        mensagem.innerHTML= "<p> Digite seu nome! </p>";
        nome.focus();
        return null;
    }
    
    if(email.value == ""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite seu email! </p>";
        email.focus();
        return null;
    }
    
    if(senha.value ==""){
        evento.preventDefault();
        mensagem.innerHTML = "<p> Digite sua senha!</p>";
        senha.focus();
        return null;
    }
    
    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        nome : nome.value,
        email : email.value,
        senha : senha.value
    })

    localStorage.setItem("dados", JSON.stringify(dados));
    evento.preventDefault();
    mensagem.innerHTML="<p> Seu cadastro foi feito com sucesso</p>";

    setTimeout(()=>{
        window.location.assign("login.html");
    }, 3000)
}