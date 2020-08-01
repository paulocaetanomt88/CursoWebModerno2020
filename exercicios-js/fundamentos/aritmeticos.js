const [a, b, c, d] = [1, 2, 3, 4]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = b * c
const divisao = d / a
const modulo = d % 2

const operadores = `
    Números: a = 1, b = 2, c = 3, d = 4

    Operações com os Operadores + - * / % e -(unário)
    Soma a + b + c + d = ${soma},
    Subtração d - b = ${subtracao},
    Multiplicação b * c = ${multiplicacao},
    Divisão d / a = ${divisao},
    Módulo d % 2 = ${modulo},
    Unário -(a) = ${-a}
`
console.log(operadores)