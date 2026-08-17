const veiculo1 = Number(prompt("Insira a velocidade do Veículo 1"))
const veiculo2 = Number(prompt("Insira a velocidade do veículo 2"))

if(veiculo1 > veiculo2) {
    alert("Veículo 1 tem é mais rápido que o Veículo 2")
} else if (veiculo2 > veiculo1) {
    alert("Veículo 2 é mais rápido que o Veículo 1")
} else if (veiculo1 == veiculo2) {
    alert("Os dois veículos possuem a velocidade igual")
}

