const nome = 'Paulo'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1+1}`) // interpreta o que está entre ${ }

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)