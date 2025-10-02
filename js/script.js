"use strict";

const botao = document.getElementById("startBtn");

botao.addEventListener("click", () => {

    let calcularIdade = (dia, mes, ano) => {
        let anoAtual = new Date().getFullYear()
        let mesAtual = new Date().getMonth() + 1
        let diaAtual = new Date().getDate()

        let diaNasc = parseInt(dia)
        let mesNasc = parseInt(mes)
        let anoNasc = parseInt(ano)

        let idade = 0

        idade = anoAtual - anoNasc;

        if (mesNasc > mesAtual || (mesAtual == mesNasc && diaAtual < diaNasc)) {
            idade -= 1
        }

        return idade
    }


    let nome = prompt("Informe o seu nome")

    let dataNascimento = prompt("Informe seu ano de nascimento (dia/mes/ano)")


    let [dia, mes, ano] = dataNascimento.split("/")

    let anoAtual = new Date().getFullYear()

    if (ano >= anoAtual ) {
        console.warn("A data do nascimento está errado!")
        alert("A data do nascimento está errado!")
        return

    }
    
    let idade = calcularIdade(dia, mes, ano)

    alert(`Olá! Meu nome é ${nome} e tenho ${idade} anos!!!`)


    let confirmacao = confirm("Suas informações estão corretas?")

    if (confirmacao) {
        alert("Obrigado por participar!!")
    }else{
        alert("Você cancelou a confirmação? Houve algum problema?")

        console.warn("Confirm cancelado pelo usuário")
    }



});
