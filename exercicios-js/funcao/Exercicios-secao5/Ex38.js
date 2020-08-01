function inicioFim (inicio = 0, fim = 100) {
    let vetorImpares = []

    if(fim < inicio) {
        let troca = inicio
        inicio = fim
        fim = troca
    }

    for (let i = inicio; i <= fim; i++) {
        if (i%2 !== 0)
            vetorImpares.push(i)
    }

    return vetorImpares
}

console.log(inicioFim(20,80))
console.log(inicioFim(80,20))
console.log(inicioFim())
console.log(inicioFim(50))
