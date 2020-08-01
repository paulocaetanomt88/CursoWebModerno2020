const soma = function(x, y) {
    return x + y
}

const subtracao = function(x, y) {
    return x - y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResultado(3,4) // se 'operacao' for omitida assume o valor padrão 'soma'
imprimirResultado(5,4, subtracao) // aqui chama a operação subtracao
imprimirResultado(9,3, function(x,y) { // passando uma função como param de operação
    return x / y
})

// passando uma arrow function como param de operação
imprimirResultado(2,4, (x,y) => x * y) 

const pessoa = {
    falar: function () { // criando função anonima dentro de objeto
        console.log('Opa')
    }
}
pessoa.falar()