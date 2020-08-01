let calculaValorPorItem = (codigo, quantidade) => {
    switch (codigo) {
        case 100:
            return quantidade + " Cachorro quente(s) = " + (quantidade * 3)
            break;
        case 200:
            return quantidade + " Hamburguer(es) simples = " + (quantidade * 4)
            break;
        case 300:
            return quantidade + " Cheeseburguer(es) = " + (quantidade * 5.5)
            break;
        case 400:
            return quantidade + " Bauru(s) = " + (quantidade * 7.5)
            break;
        case 500:
            return quantidade + " Refrigerante(s) = " + (quantidade * 3.5)
            break;
        case 600:
            return quantidade + " Suco(s) = " + (quantidade * 2.8)
            break;
        default:
            return "Produto inexistente"
    }
}

console.log(calculaValorPorItem(100, 1))
console.log(calculaValorPorItem(200, 2))
console.log(calculaValorPorItem(300, 3))
console.log(calculaValorPorItem(400, 2))
console.log(calculaValorPorItem(500, 1))
console.log(calculaValorPorItem(600, 2))
console.log(calculaValorPorItem(700, 3))