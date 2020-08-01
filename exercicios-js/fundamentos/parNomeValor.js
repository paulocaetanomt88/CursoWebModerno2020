// par nome valor
const saudacao = "Na escuta..." // contexto léxico 1

function exec() {
    const saudacao = 'Prossiga' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Paulo',
    idade: 31,
    peso: 97,
    endereco: {
        logradouro: 'Rua da Selva!',
        numero: 888
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)