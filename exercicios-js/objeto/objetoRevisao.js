// coleção dinâmica de pares chave/valor
const produto = new Object

produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log("Imprimindo dados do objeto produto")
console.log(produto)

delete produto.preco
delete produto['Marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Junior',
        idade: 31,
        endereco: {
            logradouro: 'Avenida Cuiabá',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Maria',
        idade: 19
    }, {
        nome: 'Jose',
        idade: 50
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

console.log("Imprimindo dados do objeto carro")
console.log(carro)

// alterando dados de atributos
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Mato Grosso'

console.log("Imprimindo dados do objeto carro depois de alterar atributos")
console.log(carro)

// deletando atributos
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log("Imprimindo dados do objeto carro depois de deletar atributos")
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)