let calculaFatorial = numero => {
    let resultado = 1
    let count = 1
    while (count <= numero) {
        resultado *= count
        count++
    }
    return resultado
}

 console.log(calculaFatorial(5))