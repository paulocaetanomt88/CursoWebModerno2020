let selecionaFruta = nome => {
    switch (nome) {
        case "maçã":
            return "Não vendemos esta fruta aqui"
            break;
        case "kiwi":
            return "Estamos com escassez de kiwi"
            break;
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
            break;
        default:
            return "Opção inválida"
            break;
    }
}

console.log(selecionaFruta("maçã"))
console.log(selecionaFruta("kiwi"))
console.log(selecionaFruta("melancia"))
console.log(selecionaFruta("abacaxi"))