function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco(0.1))
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // imprime o valor calculado
console.log(getPreco.apply(carro)) //      ¬ tem mesmo efeito

console.log(getPreco.call(carro, 0.17, '$')) // com o call passa por parametro o objeto e os outros valores
console.log(getPreco.apply(carro, [0.17, '£'])) // com o apply passa o objeto e os outros parametros dentro de um array