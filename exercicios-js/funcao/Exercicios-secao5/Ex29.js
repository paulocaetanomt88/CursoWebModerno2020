let percorreVetor = vetor => {
    dentroDoIntervalo = 0
    foraDoIntervalo = 0

    for(let i = 0; i <= vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20) {
            dentroDoIntervalo++
        } else {
            foraDoIntervalo++
        } 
    }

    return `
    Intervalo [10,20]
    Dentro: ${dentroDoIntervalo}
    Fora: ${foraDoIntervalo}
    `
}

// Gerando o vetor com numeros de 1 a 50
numeros = [0]
for(let n = 1; n < 50; n++) {
    numeros.push(n)
}

console.log(percorreVetor(numeros))