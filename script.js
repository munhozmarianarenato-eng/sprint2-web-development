const botaoLogin = document.getElementById("botaoLogin");

botaoLogin.addEventListener("click", function() {

    let usuario = document.getElementById("usuario").value;

    let senha = document.getElementById("senha").value;

    if(usuario === "" || senha === "") {

        alert("Preencha todos os campos");

    } else {

        alert("Login realizado com sucesso");

    }

});

function atualizarHorario() {

    let agora = new Date();

    let horario = agora.toLocaleTimeString();

    document.getElementById("horario").innerText = horario;

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

    let quantidade = document.querySelectorAll("#listaTarefas li").length;

    document.getElementById("contadorTarefas").innerText = quantidade;

    document.getElementById("inputTarefa").value = "";

});

const botaoLimpar = document.getElementById("limparLista");

botaoLimpar.addEventListener("click", function() {

    document.getElementById("listaTarefas").innerHTML = "";

    document.getElementById("contadorTarefas").innerText = 0;

});