let vetorDeNumeros = [1, 2, 3, 4, 5]
let elemento = 6

let funcao1 = (vetor, numero) => {
    let novoVetor = []

    for(let i = 0; i < vetor.length; i++) {
        novoVetor.push(vetor[i] * numero)
    }

    return novoVetor
}

let funcao2 = (vetor, numero) => {
    if(numero >= 5) {
        let novoVetor = []

        for(let i = 0; i < vetor.length; i++) {
            novoVetor.push(vetor[i] * numero)
        }

        return novoVetor
    } else {
        return "Numero não é maior que 5"
    }
}

console.log(funcao1(vetorDeNumeros, elemento))
console.log(funcao2(vetorDeNumeros, elemento))