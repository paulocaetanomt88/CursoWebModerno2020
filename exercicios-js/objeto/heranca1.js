const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // o protótipo do objeto ferrari é um Objeto
console.log(ferrari.__proto__ === Object.prototype) // __proto__ representa o protótipo de mais alto nível do objeto
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // Object em JavaScript é uma função
console.log(Object.prototype, MeuObjeto.prototype)