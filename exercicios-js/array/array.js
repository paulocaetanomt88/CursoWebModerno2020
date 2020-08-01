/* !!! Não existe tipo de dados Array em Javascript !!!
 * um array é um objeto especial que ao invés de organizar os seus atributos a partir de chaves {}, ele usa colchetes []
 * e organiza os seus dados a partir de um índice, começando a partir de um inteiro 0  (zero)
 * É uma estrutura dinâmica, cresce e diminui dinamicamente, diferente de outras linguagens que o array é uma estrutura estática
 * de tamanho fixo.
 * Por a linguagem JavaScript sers fracamente tipada, um array pode ter elementos dos mais variado tipos possiveis
*/
console.log(typeof Array, typeof new Array, typeof []) // --> function object object

let aprovados = new Array('Bia', 'Carlos', 'Paulo')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Paulo']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[4] = 'Ana'
aprovados.push('Abia') // mais apropriado para inserir um novo elemento dentro de um array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // embaralha a ordem dos elementos
console.log(aprovados)

delete aprovados[1] // indice 1 foi deletado
console.log(aprovados[1]) // acessar indice deletado dá undefined
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

// .splice(posição afetada, qtd de elementos a ser removida, A partir do 3º parâmetro são elementos a serem adicionados)
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)