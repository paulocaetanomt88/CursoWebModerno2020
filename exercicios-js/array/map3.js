Array.prototype.map2 = function(callback) {
    // map gera um novo array e não mexe no array atual
    const newArray = []
   
    for(let i = 0; i < this.length; i++) {
        // após passar o índice e o array original, o resultado da callback vai ser adicionado a newArray
        newArray.push(callback(this[i], i, this)) //callback(elementoAtual, índice, arrayAtual)
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar o array com apenas os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)