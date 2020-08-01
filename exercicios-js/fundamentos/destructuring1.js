const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Caetano',
    idade: 31,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 888,
        cep: '78000-000'
    }
}

// extraiu apenas nome e idade do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)