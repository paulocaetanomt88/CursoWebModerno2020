// Lembrando: Um objeto é uma coleção de chaves e valores
const pessoa = {
    nome: 'Paulo',
    idade: 31,
    peso: 100
}

// Object.keys(pessoa) acessa todas as keys (chaves) da coleção pessoa
console.log(Object.keys(pessoa))

// Object.values(pessoa) acessa todos os values (valores) da coleção pessoa
console.log(Object.values(pessoa))

// Object.keys(pessoa) acessa e retorna arrays com subarrays que contém keys e values da coleção pessoa
console.log(Object.entries(pessoa))

// Outra forma usando forEach com desestruturação
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Outra forma usando forEach percorrendo o array
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// Definindo uma propriedade com Object.defineProperty(objetoDestino, 'nomeDaPropriedade', {objeto com suas definições})
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // pode ser listada: true ou false
    writable: false, // pode ser alterada: true ou false, se for false funcionará como um "freeze"
    value: '01/01/2019'
} ) 

// após definida como não writable, a propriedade não pode ser alterada
pessoa.dataNascimento = '01/01/2017'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// concatenando objetos
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(destino, o1, o2)

// Object.freeze(obj) - sem o freeze pode ocorrer a sobrescrita de um atributo do objeto
obj.c = 1234

console.log(obj)

