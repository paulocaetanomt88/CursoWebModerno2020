const pai = { nome: 'Paulo', corCabelo: 'louro' }

// Criando um objeto ja definindo o seu prototipo com Object.create(prototipo)
const filha1 = Object.create(pai)
filha1.nome = 'Maria Clara'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { 
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla ' // vai ignorar pois não é writable
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// for..in percorre o objeto
// hasOwnProperty retorna true se a propriedade pertence ao objeto, se for propriedade herdada retorna false
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}