const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

// console.log(produtos.filter(function(p) { 'p' é cada um dos elementos do array
    // return false - retorna um array vazio
    // return true - não está filtrando nada ainda, então retorna todos os elementos em um novo array
// }))

console.log(produtos.filter(function(p) {
    if(p.preco > 500 && p.fragil == true) return true 
}))


// Outra forma
const caro = produto => produto.preco >= 500 // retorna se for > ou = a 500
const fragil = produto => produto.fragil // retorna se for verdadeiro (true)
console.log(produtos.filter(caro).filter(fragil)) 