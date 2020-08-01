const pessoa = {
    saudacao : 'Bom dia',
    falar() {
        console.log(this.saudacao) // this está acessando o atributo saudacao que pertence ao objeto pessoa, o qual é o dono da função falar
    }
}
pessoa.falar() // ok, saída => Bom dia

// const falar não possui atributo saudacao, é diferente de const pessoa  
const falar = pessoa.falar 

// falar() vai dar undefined porque existe conflito entre paradigmas funcional e OO.
// Nesse contexto this não está apontando para o objeto pessoa,
// somente para a funçao falar de objeto pessoa
falar() 

// Usando bind: método responsável por amarrar um determinado objeto para ele ser
// o dono da execução naquele método em que ele for chamado
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // ok, saída => Bom dia
