// factory é uma função que retorna um novo objeto
function criarPessoa(paramNome, paramSobrenome, paramIdade) {
    return {
        nome: paramNome,
        sobrenome: paramSobrenome,
        idade: paramIdade
    }
}
console.log(criarPessoa("Paulo", "Caetano", 31))

