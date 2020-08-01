let contaCedulas = valor => {
    let contaNotasDe100, contaNotasDe50, contaNotasDe20, contaNotasDe10, contaNotasDe5, contaNotasDe2 = 0

    if (valor >= 100) {
        contaNotasDe100 = Math.round((valor / 100) - ((valor % 100) / 100))
        valor = valor % 100
    }
    
    if (valor >= 50) {
        contaNotasDe50 = Math.round((valor / 50) - ((valor % 50) / 50))
        valor = valor % 50
    }

    if (valor >= 20) {
        contaNotasDe20 = Math.round((valor / 20) - ((valor % 20) / 20))
        valor = valor % 20
    }

    if (valor >= 10) {
        contaNotasDe10 = Math.round((valor / 10) - ((valor % 10) / 10))
        valor = valor % 10
    }

    if (valor >= 5) {
        contaNotasDe5 = Math.round((valor / 5) - ((valor % 5) / 5))
        valor = valor % 5
    }

    if (valor >= 2) {
        contaNotasDe2 = Math.round((valor / 2) - ((valor % 2) / 2))
        valor = valor % 2
    }

    let montaStringDeSaida = ``
    
    if(contaNotasDe100 >= 1)
        montaStringDeSaida += `
    ${contaNotasDe100} Notas de 100
    `
    if(contaNotasDe50 >= 1)
        montaStringDeSaida += `${contaNotasDe50} Notas de 50
    `
    if(contaNotasDe20 >= 1)
        montaStringDeSaida += `${contaNotasDe20} Notas de 20
    `
    if(contaNotasDe10 >= 1)
        montaStringDeSaida += `${contaNotasDe10} Notas de 10
    `
    if(contaNotasDe5 >= 1)
        montaStringDeSaida += `${contaNotasDe5} Notas de 5
    `
    if(contaNotasDe2 >= 1)
        montaStringDeSaida += `${contaNotasDe2} Notas de 2
    `
    return montaStringDeSaida
}

console.log(contaCedulas(287))