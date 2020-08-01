const notas = [6.5, 7.5, 8, 9, 7]

for(let i in notas) {
    console.log(`Indice ${i} - Nota: ${notas[i]}`)
}

const pessoa = {
    nome : 'Paulo',
    sobrenome : 'Caetano dos Anjos',
    idade: 31,
    peso: 103
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

