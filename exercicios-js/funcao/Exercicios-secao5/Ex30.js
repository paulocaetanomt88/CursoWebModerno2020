let maiorMenorDoVetor = vetor => {
    let maior = vetor[0]
    let menor = vetor[0]

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if(vetor[i] < menor) {
            menor = vetor[i]
        }
        console.log(vetor[i])
    }

    return `
    Maior: ${maior}
    Menor: ${menor}`
}

let vetorDeNumeros = []
let numero = 2
for(let n = 1; n < 20; n++) {
    numero *= -2
    vetorDeNumeros.push(numero)
}

console.log(maiorMenorDoVetor(vetorDeNumeros))