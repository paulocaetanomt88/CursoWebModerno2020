// variavel a não foi declarada ainda, mas existe usando var devido ao conceito de hoisting
// JavaScript declara automagicamente, não lança erro mas atribui valor 'undefined'
console.log('a = ', a)

// AGORA a variavel 'a' foi declarada e recebe valor 2
var a = 2

// imprime o valor da variavel
console.log('a = ', a)