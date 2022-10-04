function validar() {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var senha = document.getElementById("senha");
    var confirmarsenha = document.getElementById("confirmarsenha");
    var sexo = document.getElementById("sexo")
    var newsletter = document.getElementById("newsletter").checked;

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return;
    }

    if (sobrenome.value == "") {
        alert("Sobrenome não informado");
        sobrenome.focus();
        return;
    }

    if (senha.value == "") {
        alert("Senha não informada!");
        senha.focus();
        return;
    }

    if (confirmarsenha.value == "") {
        alert("Você deve confirmar sua senha!");
        confirmarsenha.focus();
        return;
    }

    if (telefone.value == "") {
        alert("Você deve infromar um número de telefone");
        telefone.focus();
        return;
    }

    if (email.value == "") {
        alert("Você deve infromar um endereço de email");
        email.focus();
        return;
    }

    if (sexo.value == "") {
        alert("Sexo não selecionado!");
        sexo.focus();
        return;
    }


    // Senhas iguais
    if (senha.value != confirmarsenha.value) {
        alert("As senhas não conferem!");
        senha.focus();
        return;
    }

    // Verificar se nome e sobrenome tem mais de 2 caracteres
    if (nome.value.length <= 2) {
        alert("O nome deve conter mais de 2 caracteres");
        nome.focus();
        return;
    }

    if (sobrenome.value.length <= 2) {
        alert("O sobrenome deve conter mais de 2 caracteres");
        sobrenome.focus();
        return;
    }

    // Verificar se o email possui um @

    if (!email.includes("@")) {
        alert("O email está incorreto!");
        email.focus();
        return;
    }

}