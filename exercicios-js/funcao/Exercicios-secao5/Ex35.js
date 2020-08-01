let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

// Metodo de preguiçoso
//vetorPilha += vetorAdiciona
//console.log(vetorPilha)

// criando função reaproveitável
function adicionaVetor (vetorInicial, vetorAgregante) {
    for (let i = 0; i < vetorAgregante.length; i++) {
        vetorInicial.push(vetorAgregante[i])
    }
    return vetorInicial
}

console.log(`
Resultado: ${adicionaVetor(vetorPilha, vetorAdiciona)}
`)