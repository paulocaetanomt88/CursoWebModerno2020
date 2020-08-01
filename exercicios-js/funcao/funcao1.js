// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(4,4)
imprimirSoma(2,3)
imprimirSoma(2,4,6,8)

// Função com retorno

function soma(a, b = 2) {
    return a + b
}


console.log(soma(5,2,4))