let valor // variavel valor declarada mas é indefinida (undefined)
console.log(valor)

valor = null
console.log(valor) //valor agora é nulo
// console.log(valor.toString()) // Erro de tentar acessar algo que está nulo!

const produto = {}
console.log(produto.preco) // atributo .preco não existe mas não lança erro
// console.log(produto.preco.a) // dá erro pois está tentando acessar atributo .a de preço que é nulo 

console.log(produto) // imprime objeto vazio

produto.preco = 3.50 // agora definiu um valor para o atributo preco

console.log(produto)

produto.preco = undefined // evitar usar undefined
console.log(!!produto.preco)
// delete produto.preco

console.log(produto)

produto.preco = null // sem preco. Utilizado para produto que estiver de graça
