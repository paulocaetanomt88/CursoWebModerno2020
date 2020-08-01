function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

// simulando o new
// f é a função construtora 
// ...params pode ser um conjunto de parâmetros para construir um objeto
function novo(f, ...params) {
    // 1º passo: criar um objeto vazio
    const obj = {}

    // 2º passo: fazer com que o protótipo desse objeto aponte para f.prototype
    obj.__proto__ = f.prototype

    // 3º passo: chamar a função f.apply() passando o objeto de contexto e os parametros recebidos
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 789)
const aula4 = novo(Aula, 'Escola Cod3r', 879)

console.log(aula3, aula4)