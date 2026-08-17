const personagemAtaque = prompt("Digite o nome do Personagem atacante")
const poderDeAtaque = Number(prompt("Digite o valor de ataque do personagem atacante"))

const personagemDefensor = prompt("Digite o nome do personagem defensor")
let vidaDefensor = Number(prompt("Digite a quantidade de vida do personagem defensor"))
const poderDeDefesa = Number(prompt("Digite o poder de defesa do personagem defensor"))
const possuiEscudo = prompt("O personagem defensor possui escudo? (Sim ou Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim" ) {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
} else if (poderDeAtaque <= poderDeDefesa) {
    danoCausado = 0
}

vidaDefensor -= danoCausado

alert(
    personagemAtaque + "\n" +
    "Poder de ataque: " + poderDeAtaque + "\n" + "\n" +

    personagemDefensor + "\n" +
    "Vida final: " + vidaDefensor + "\n" +
    "Poder de defesa: " + poderDeDefesa + "\n" +
    "Possui escudo? : " + possuiEscudo + "\n" + "\n" +

    personagemAtaque + " causou " + danoCausado + " de dano em " + personagemDefensor
)

