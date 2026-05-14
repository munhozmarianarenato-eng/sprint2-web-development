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