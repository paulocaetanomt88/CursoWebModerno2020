let num1 = 1
let num2 = 2

num1++ // pós-incrementa 1 em num1
console.log(num1) // imprime o valor de num1 que agora é 2
--num1 // pré-decrementa 1 em num1
console.log(num1) // imprime o valor de num1 que agora é 1

// pré-incrementa 1 em num1 e compara com num2, após isso decrementa 1 em num2
// num1 agora vale 2 e num2 vale 2 no momento da comparação, então retorna true
console.log(++num1 === num2--)

// feito o decremento em num2, agora num2 vale 1, entao retorna false
console.log(++num1 === num2--)