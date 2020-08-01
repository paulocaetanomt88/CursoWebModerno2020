let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a) // 3
console.log(global.a) // undefined

console.log(this.b) // undefined
console.log(global.b) // => 123

console.log(this.c) // => 456
console.log(module.exports.c) // => 456
console.log(module.exports === this) // true
// Em JS, cada arquivo representa um módulo
// module.exports retorna um objeto pra fora
console.log(module.exports) // equivalente a fazer module.exports = { e: 456, f: false, g: 'teste'}

// criando uma variavel maluca sem var ou let
abc = 3 // NÃO FAZER ISSO! criar uma variavel global no contexto do node
console.log(global.abc)

