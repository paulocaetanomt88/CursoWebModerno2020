let vetorInteiro = [1, 2, 3, 4]
let vetorString = ["Texto1", "Texto2", "Texto3"]
let vetorDouble = [2.1, 3.2, 7.1, 5.2]

function concatenar(...args) {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorString, vetorDouble))
