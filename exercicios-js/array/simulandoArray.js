const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

// quaseArray.0 nao funciona pois o numeral 0 não respeita as normas de nomenclatura de atributos
console.log(quaseArray[0]) // mas a posição (atributo) 0 pode ser acessada através de []

const meuArray = ['Rafael', 'Ana', 'Bia'] // um array de verdade
console.log(quaseArray.toString(), meuArray)