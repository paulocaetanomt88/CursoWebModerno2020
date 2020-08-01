let selecionaVeiculo = opcao => {
    switch (opcao) {
        case "hatch":
            return "Compra efetuada com sucesso"
            break;
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            return "Tem certeza que não prefere esse modelo?"
            break;
        default:
            return "Não trabalhamos com este tipo de automóvel aqui"
            break;
    }
}

console.log(selecionaVeiculo("hatch"))
console.log(selecionaVeiculo("sedan"))
console.log(selecionaVeiculo("motocicleta"))
console.log(selecionaVeiculo("caminhonete"))
console.log(selecionaVeiculo("barco"))