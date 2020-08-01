let dobro = function (a) { // forma literal de declarar uma função
    return 2 * a
}

dobro = (a) => { // arrow function
    return 2 * a
}

dobro = a => 2 * a // arrow function com return implícito, forma usada para funções simples de 1 linha
console.log(dobro(Math.PI))

let ola = function () { // forma literal
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())