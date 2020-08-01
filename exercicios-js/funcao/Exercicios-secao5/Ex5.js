let formatoMoeda = numero => {
    numero = "R$ " + numero.toFixed(2).replace(".", ",")
    return numero;
}

console.log(formatoMoeda(0.356800000004))