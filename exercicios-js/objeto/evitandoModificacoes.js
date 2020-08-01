// Object.preventExtensions permite modificação e deleção de atributos, porém não permite adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

// Object.seal permite modificação de atributos, porém não permite adicionar e nem remover atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.nome = 'Joana'
pessoa.peso = 55
delete pessoa.idade

console.log(pessoa)

// Object.freeze = selado + valores constantes