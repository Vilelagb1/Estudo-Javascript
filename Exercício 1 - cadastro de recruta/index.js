const nome = prompt("Insira seu nome")
const sobreNome = prompt("Insira seu sobrenome")
const campoDeEstudo = prompt("Insira seu campo de estudo")
const anoDeNascimento = prompt("Insira o ano de nascimento")

const idade = 2026 - anoDeNascimento

alert(`
    Recruta cadastrado com sucesso
    Nome completo: ${nome} ${sobreNome}
    Campo de estudo: ${campoDeEstudo}
    Idade: ${idade}    
`);