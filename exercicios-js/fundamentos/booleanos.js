let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1             // Todo numero inteiro diferente de 0 é resolvido como True (verdadeiro)
console.log(!isAtivo)   // ! = Não Lógico. P.s.: Usando 1 ponto de exclamação inverte o valor (se for True passa a ser False, se for False passa a True)
console.log(!!isAtivo)  // !! = Não Não Lógico. P.s.: Usando 2 pontos de exclamação retorna o valor original.

console.log('Os verdadeiros: ')
console.log(!!3)        // Número inteiro positivo (diferente de 0)
console.log(!!-1)       // Número inteiro negativo (diferente de 0)
console.log(!!' ')      // Texto mesmo que seja um espaço em branco retorna true
console.log(!![])       // Array ou Vetor mesmo que seja vazio
console.log(!!{})       // Objeto
console.log(!!Infinity) // tipo infinito
console.log(!!(isAtivo = true)) // Definindo manualmente como true

console.log('Os falsos: ')
console.log(!!0)        // Número 0
console.log(!!'')       // Texto vazio (é diferente de texto em branco)
console.log(!!null)     // Tipo nulo
console.log(!!NaN)      // Not a Number
console.log(!!undefined) // Tipo indefinido ou não definido
console.log(!!(isAtivo = false)) // Definindo manualmente como false

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // vai retornar true pois ' '  é verdadeiro
console.log(!!('' || null || 0 || '123')) // tirando o !! vai retornar 123 pois '123'  é o único valor verdadeiro

let nome = '' // variavel nome criada com texto vazio

// verifica e imprime a string que tiver valor true
console.log(nome || 'Desconhecido') // Obs.: se o valor de nome não for preenchido retorna o outro valor analisado que for verdadeiro (Desconhecido)

nome = 'Paulo' // Atribui um valor (nesse caso texto Paulo) à variavel
console.log(nome || 'Desconhecido') // Obs.: neste caso, ambos são verdadeiros, mas retorna o primeiro valor verdadeiro
