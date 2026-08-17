let valorEmMetros = prompt("Digite um valor em metros (m) que deseja converter")
const opcaoDeConversao = Number(prompt("Escolha a opção de deseja converter, de 1 a 6:\n" + "\n" +
    "1 - milímetro (mm)\n" +
    "2 - centímetro (cm)\n" +
    "3 - decímetro (dm)\n" +
    "4 - decâmetro (dam)\n" +
    "5 - hectômetro (hm)\n" +
    "6 - quilômetro (km)\n"
))

switch (opcaoDeConversao) {
    case 1: alert(valorEmMetros * 1000 + "mm")
    break

    case 2: alert(valorEmMetros * 100 + "cm")
    break

    case 3: alert(valorEmMetros * 10 + "dm")
    break

    case 4: alert(valorEmMetros / 10 + "dam")
    break
    
    case 5: alert(valorEmMetros / 100 + "hm")
    break

    case 6: alert(valorEmMetros / 1000 + "km")
    break

    default: alert("Opção inválida")
    break
}