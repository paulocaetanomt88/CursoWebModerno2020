const escola = "Cod3r"
console.log("10" + 2) // String ganha! nesse caso específico o Js NÃO realiza operação de soma, o Js concatena retornando a string '102' pois a String têm precedência e o + também é usado para concatenar strings.
console.log("10" - 2) // Já nesse caso realiza a operação de subtração pois o - nao é utilizado para outra função (nao que eu saiba)
console.log(escola.charAt(4)) // retorna caractere no índice 4 que é o 'r' pois inicia com índice 0
console.log(escola.charAt(5)) // retornaria erro em outra linguagem mas retorna um valor vazio em Js
console.log(escola.charCodeAt(3)) // retorna o código na tabela ASC do caractere na posição 3

console.log(escola.indexOf('3')) // retorna o índice do caractere especificado, no caso 3 também
console.log(escola.substring(1)) // retorna a partir do índice 1 até o final (ignora o caractere no índice 0)
console.log(escola.substring(0, 3)) // retorna os 3 primeiros caracteres (do índice 0 até o 3, excluindo o índice 3)
console.log('Escola '.concat(escola).concat("!")) // concatena a string 'Escola ' com a variavel escola e outro concat para "!"
console.log('Escola ' + escola + '!') // outra forma de concatenar strings com variável (eis)
console.log(escola.replace(3, 'e')) // substitui o caractere no índice 3 pela string no segundo parâmetro
console.log(escola.replace(/\d/, 'e')) // expressão regular que substitui todos os dígitos (nesse caso o único dígito é o número 3) pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) // expressão regular que substitui todos os caracteres pelo 'e' especificado

console.log('Ana,Maria,Pedro'.split(',')) // split converte string em array, separando os textos entre o caractere especificado (no caso a ',' vírgula)



