let primeiroNumero = prompt("Digite o primeiro número que queira realizar os cálculos")
let segundoNumero = prompt("Digite o segundo número que quera realizar os cálculos")

const soma = parseFloat(primeiroNumero) + parseFloat(segundoNumero)
const subtracao = primeiroNumero - segundoNumero
const multiplicacao = primeiroNumero * segundoNumero
const divisao = primeiroNumero / segundoNumero

alert(`
    Soma = ${soma}
    Subtração = ${subtracao}
    Multiplicação = ${multiplicacao}
    Divisão = ${divisao} 
    `)
