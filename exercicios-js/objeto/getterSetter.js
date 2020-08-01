const sequencia = {
    _valor: 1, // usar o _underline no início da variavel indica (convenção) que é uma variável de uso apenas interno

    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

// imprimindo as chamadas da função sem passar valor prévio vai usar a variável interna _valor que tem valor inicial 1
console.log(sequencia.valor, sequencia.valor)

// atribuindo um valor maior que o _valor inicial
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // imprimindo as chamadas das funções

// tentando atribuir um valor menor que o valor anterior já passado (1000)
sequencia.valor = 900

// imprimindo as chamadas das funções não vai aceitar o valor menor recebido (900) que _valor atual pois existe uma verificação condicional para isso
// e vai continuar a sequencia de onde tinha parado, ou seja: 1002, 1003
console.log(sequencia.valor, sequencia.valor)