let trocaVetor = (vetor1, vetor2) => {
    if (Array.isArray(vetor1) && Array.isArray(vetor2)) {
        if (vetor1.length == vetor2.length){
            let tamanhoVetor1 = vetor1.length
            let tamanhoVetor2 = vetor2.length

            for (let i=0; i < tamanhoVetor1; i++) {
                vetor2.push(vetor1[i])
            }
            
            for (let i=0; i < tamanhoVetor2; i++) {
                vetor1.push(vetor2[i])
            }

            for (let i=0; i < tamanhoVetor1; i++) {
                vetor1.shift()
            }
            
            for (let i=0; i < tamanhoVetor2; i++) {
                vetor2.shift()
            }

            return `
            Vetor1: ${vetor1}
            Vetor2: ${vetor2}
            `
        } else {
            return "Um dos vetores possui tamanho diferente"
        }
    } else {
        return "Um dos parâmetros não é do tipo vetor"
    }
    
}

let vetor1 = [1, 2, 3]
let vetor2 = [4, 5, 6]

console.log(trocaVetor(vetor1, vetor2))

