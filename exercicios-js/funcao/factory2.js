function criarProduto(nome, preco) {
    desconto = (preco * 0.1)
    return {
        nome, preco, desconto, precoFinal: preco - desconto
    }
}

console.log(criarProduto("Notebook", 2199.49))

