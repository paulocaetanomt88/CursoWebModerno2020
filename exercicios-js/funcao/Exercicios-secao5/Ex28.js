let contaParesImpares = numeros => {
    let vetorDeInteiros = numeros
    let vetorDePares = []
    let vetorDeImpares = []

    for (let i = 0; i < vetorDeInteiros.length; i++) {
        if(vetorDeInteiros[i] % 2 === 0) {
            vetorDePares.push(vetorDeInteiros[i])
        } else {
            vetorDeImpares.push(vetorDeInteiros[i])
        }
    }

    return `
    Vetor de Impares: ${vetorDeImpares}
    Vetor de Pares: ${vetorDePares}
    `
}

let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(contaParesImpares(inteiros))