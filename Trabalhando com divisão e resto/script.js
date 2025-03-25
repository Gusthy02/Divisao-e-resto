// Entrada de valores
// Prof, utilizei replace para permitir que o usuário possa digitar valores usando ","

let numeroA = Math.floor(parseInt(
    prompt("Digite um número inteiro: ").replace(",", ".")
), -1);

let numeroB = Math.floor(parseInt(
    prompt("Digite um número inteiro: ").replace(",", ".")
), -1);

// Desenvolvimento

let operacoes = [numeroA / numeroB, numeroA % numeroB]

// Saída

alert("O resultado da divisão é: " + operacoes[0].toFixed(2) + "\nO resto da divisão é: " + operacoes[1].toFixed(2))