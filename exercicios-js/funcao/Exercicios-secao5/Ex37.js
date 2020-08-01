let progressaoAritmetica = (numeroDeTermos, primeiroTermo, razao) => {
    let termos = primeiroTermo
    let somaElementos = 0

    console.log("Progressão Aritmética para a1="+primeiroTermo+" n="+numeroDeTermos+" r="+razao)
    for (let i=0; i < numeroDeTermos; i++) {
        console.log((i+1) + "º termo: " + termos)
        somaElementos += termos
        termos += razao
    }

    return ("Soma dos elementos: " + somaElementos)
}

let progressaoGeometrica = (numeroDeTermos, primeiroTermo, razao) => {
    let termos = 0
    let somaDaPG
    let somaElementos = 0

    console.log("Progressão Geométrica para a1="+primeiroTermo+" n="+numeroDeTermos+" r="+razao)
    for (let i=0; i < numeroDeTermos; i++) {
        termos = primeiroTermo*(razao**i)
        somaElementos += termos
        console.log(termos)
    }

    produtoDaPG = (Math.pow(primeiroTermo, numeroDeTermos)*Math.pow(razao, (numeroDeTermos*(numeroDeTermos-1)/2)))

    return (`Soma dos termos: ${somaElementos}
Produto dos termos da PG: ${produtoDaPG}
`)
}


console.log(progressaoAritmetica(3, 5, 5))
console.log("-----------------------------")
console.log(progressaoGeometrica(3, 5, 2))

