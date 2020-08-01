const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// função callback passada para um forEach pode receber 3 parâmetros apenas
// 1º. nome: string, 2º. índice, 3º. é o próprio array completo
/* 
aprovados.forEach(function(nome, indice, array) { 
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})
 */

aprovados.forEach(function(nome, indice) { 
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // função callback com arrowfunction mas ignora o índice