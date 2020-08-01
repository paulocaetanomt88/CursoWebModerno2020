// JSON vs Objeto

// JSON é um formato de dados, usado para interoperabilidade entre sistemas em formato textual genérico que nao carrega consigo
// nada específico de uma linguagem, muito presente em webservices e as vezes utilizado para armazenar configurações internas de um sistema

const objeto = { a: 1, b: 2, c: 3, soma() { return a+b+c }}

// converte para texto porém omite a funçao soma() pois JSON é um arquivo de dados (texto)
const objViraJson = JSON.stringify(objeto) 
console.log(objViraJson) 

const jsonPuro = '{ "a": 1, "b": 2, "c": 3 }'

// converte para objeto
const jsonViraObjeto = JSON.parse(jsonPuro)
console.log(jsonViraObjeto)

// Outros exemplos
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))