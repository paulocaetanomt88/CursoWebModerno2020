const pilotos = ['Vettel', 'Alonso', 'Raykkonen', 'Massa']
pilotos.pop() // .pop() remove o último elemento de um array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // .shift() remove o primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('Hamilton') // .unshift() adiciona um elemento na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar 2 elementos a partir da posição 0
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1) // na posição 3, remove 1 elemento 'Massa'
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array // .slice() pega uma parte do array a partir do elemento 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array // .slice() pega uma parte do array a partir do elemento 1 e ignorou o elemento 4
console.log(algunsPilotos2)