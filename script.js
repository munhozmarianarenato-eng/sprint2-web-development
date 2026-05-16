const botaoLogin = document.getElementById("botaoLogin");

let tentativas = 0;

botaoLogin.addEventListener("click", function() {

    tentativas++;

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let mensagemLogin = document.getElementById("mensagemLogin");

    if(usuario === "" || senha === "") {

        alert("Preencha todos os campos");

        mensagemLogin.innerText = "Preencha usuário e senha.";

        return;

    }

    alert("Login realizado com sucesso");

    mensagemLogin.innerText = "Login realizado com sucesso.";

    console.log("Tentativas de login: " + tentativas);

});

function atualizarHorario() {

    let agora = new Date();

    document.getElementById("horario").innerText =
        agora.toLocaleTimeString();

    document.getElementById("horario").style.fontWeight = "bold";

}

setInterval(atualizarHorario, 1000);

const imagens = [
    "img/imagem1.jpg",
    "img/imagem2.jpg",
    "img/imagem3.jpg"
];

let indice = 0;

function trocarImagem() {

    indice++;

    if(indice >= imagens.length) {
        indice = 0;
    }

    document.getElementById("imagemSlide").src = imagens[indice];

}

document.getElementById("imagemSlide").src = imagens[0];

setInterval(trocarImagem, 3000);

const botaoAdicionar = document.getElementById("botaoAdicionar");

botaoAdicionar.addEventListener("click", function() {

    let tarefa = document.getElementById("inputTarefa").value;

    if(tarefa === "") {
        alert("Digite uma tarefa");
        return;
    }

    let item = document.createElement("li");
    item.innerText = tarefa;

    document.getElementById("listaTarefas").appendChild(item);

    item.addEventListener("click", function() {
        item.remove();
        atualizarContador();
    });

    atualizarContador();

    document.getElementById("inputTarefa").value = "";

});

document.getElementById("inputTarefa").addEventListener("keypress", function(event) {

    if(event.key === "Enter") {
        botaoAdicionar.click();
    }

});

const botaoLimpar = document.getElementById("limparLista");

botaoLimpar.addEventListener("click", function() {

    let confirmar = confirm("Deseja realmente limpar a lista?");

    if(confirmar) {

        document.getElementById("listaTarefas").innerHTML = "";

        atualizarContador();

        alert("Lista limpa com sucesso");

    }

});

function atualizarContador() {

    let quantidade = document.querySelectorAll("#listaTarefas li").length;

    document.getElementById("contadorTarefas").innerText = quantidade;

}