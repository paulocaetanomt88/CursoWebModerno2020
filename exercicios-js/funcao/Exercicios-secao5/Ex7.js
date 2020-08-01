let bhaskara = (ax2, bx, c) => {
    let delta = (bx * bx) - 4 * ax2 * c
    if (delta > 0) {
        let coeficientes = []
        console.log("Valor de delta: " + delta)
        let coeficiente1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let coeficiente2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        coeficientes.push(coeficiente1, coeficiente2)
        return coeficientes
    } else {
        return resultado = "Para delta negativo, não existem valores reais"
    }
    
}

console.log(bhaskara(1, 3, 2))