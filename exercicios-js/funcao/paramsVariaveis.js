function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // => 0
console.log(soma(1)) // soma 0 + 1 => 1
console.log(soma(1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7)) // soma todos os parâmetros => 30.8
console.log(soma(1.1, 2.2, "teste")) // soma os numerais e concatena com a string "teste" => 3.3teste
console.log(soma('a','b','c')) // concatena 0abc