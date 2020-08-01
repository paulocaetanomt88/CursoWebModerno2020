let contaNegativosDoVetor = vetor => {
    let negativos = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }

        console.log(vetor[i])
    }

    return `
    Quantidade de Negativos: ${negativos}
    `
}

let vetorDeNumeros = []
let numero = 2
for(let n = 1; n < 20; n++) {
    numero *= -2
    vetorDeNumeros.push(numero)
}

console.log(contaNegativosDoVetor(vetorDeNumeros))