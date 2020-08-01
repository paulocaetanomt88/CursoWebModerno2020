// Armazenando uma função em uma variável
// função anônima é uma function sem nome
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma Arrow Function em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// Retorno implícito
const subtracao = (a,b) => a - b

console.log(subtracao(4,2))

const imprimir2 = a => console.log(a)
imprimir2('Teste Funcionando!!!')
