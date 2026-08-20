const nomeTurista = prompt("Digite seu nome")
let visitaCidade = prompt("Já visitou alguma cidade? (sim/não)")
let cidades = ""
let numeroDeCidades = 0

while (visitaCidade === "sim") {  
    let cidade = prompt("Qual foi o nome da cidade que visitou?")
    cidades += " - " + cidade + "\n"
    numeroDeCidades++
    visitaCidade = prompt("Você visitou alguma outra cidade? (sim/nao)")
}


if (numeroDeCidades >= 1) {
    alert(
        "Parabéns! " + nomeTurista + " você visitou " + numeroDeCidades +
        " cidades! Segue a lista de cidades que visitou: \n" + cidades
    )
} else {
    alert(
        "Que pena " + nomeTurista + " você não visitou nenhuma cidade, não perca a esperança :)"
    )
}

