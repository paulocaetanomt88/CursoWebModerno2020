const [a] = [10] // do lado esquerdo do = fica o operador de desestruturação e do lado direito está criando o array
console.log(a)

// pega os elementos 1º, 2º, ignora o 3º, 4º, 5º
const [n1, n2, , n4, n5, n6 = 0] = [10,7,9,8,3]
console.log(n1, n2, n4, n5, n6) // imprime as variaveis criadas

// ignora o 1º elemento do 1º array, ignora o 1º elemento e pega o 2º elemento do 2º array e armazena em nota
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota) // imprime a variavel criada