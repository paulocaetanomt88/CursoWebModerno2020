// '1' é igual a 1? - Verdadeiro
console.log('Teste 01: ', '1' == 1) 

// '1' (string) é de valor e tipo idêntico a 1 (numeral)? - Falso
console.log('Teste 02: ', '1' === 1)

// '3' é diferente de 3? - Não, então retorna falso
console.log('Teste 03: ', '3' != 3) 

// '3' é diferente de valor e/ou tipo (identidade) de 3? 
// - Sim, são valores iguais mas de tipos diferentes, então retorna verdadeiro
console.log('Teste 04: ', '3' !== 3)

// 3 é menor que 2? - Não, então retorna falso
console.log('Teste 05: ', 3 < 2)

// 3 é maior que 2? - Sim, então retorna verdadeiro
console.log('Teste 06: ', 3 > 2)

// 3 é menor ou igual a 2? - Não, então retorna falso
console.log('Teste 07: ', 3 <= 2)

// 3 é maior ou igual a 2? - Sim, não é igual 
// mas satisfez a primeira condição (é maior que 2), então retorna verdadeiro
console.log('Teste 08: ', 3 >= 2)

// Usando datas
const data1 = new Date(0) // 0 significa a data de referência do JavaScript 01/01/1970
console.log('data1 = ', data1)
const data2 = new Date(0) // tanto data1, quanto data2 se tratam de referencia de memória
console.log('data2 = ', data2)

console.log('Teste 09', data1 === data2) // JS vai comparar referência de memória, entao
console.log('Teste 10', data1 == data2) // nos dois casos == ou === vai dar false

// getTime retorna valor numérico em milisegundos, neste caso o parâmetro passado é idêntico que gera o mesmo retorno
// data1.getTime() é idêntico a data2.getTime()? Sim, então retorna verdadeiro
console.log('Teste 11', data1.getTime() === data2.getTime()) 

// undefined é igual a null? - Sim, então retorna verdadeiro
console.log('Teste 12', undefined == null)

// undefined é estritamente igual a null? - Nao, então retorna falso
console.log('Teste 13', undefined === null)
