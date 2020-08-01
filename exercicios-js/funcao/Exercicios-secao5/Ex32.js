let mediaVetorDeInteiros = vetor => {
    let somaDeValores = 0

    for (let i = 0; i < vetor.length; i++) { // evitar usar <= ou  >=
        somaDeValores += vetor[i]
        console.log(somaDeValores)
    }

    let media = (somaDeValores / vetor.length)

    return media
}

inteiros = [7, 8, 9, 7, 8, 9]
console.log(mediaVetorDeInteiros(inteiros))