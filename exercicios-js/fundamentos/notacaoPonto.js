console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
obj1['tipo'] = 'Futebol'

console.log('Nome: ', obj1.nome)
console.log('Tipo: ', obj1.tipo)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Executando...')
    }
}

const obj2 = new Obj('Sistema')
const obj3 = new Obj('JavaScript')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()