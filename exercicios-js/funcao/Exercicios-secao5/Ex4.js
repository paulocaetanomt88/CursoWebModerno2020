let divisao = (dividendo, divisor) => {
    let quociente = dividendo / divisor
    let resto = dividendo % divisor
    let resultado = "Quociente = " + quociente + " resto = " + resto
    return resultado
}

console.log(divisao(10, 2))