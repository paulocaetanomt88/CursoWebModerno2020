// Usando desestruturação como parâmetro de função
// passando um objeto com atributos min e max dentro do operador destructuring, 
// já extraindo o min e o max sem precisar usar o ponto para acessar os valores dentro do objeto
// para a Função rand retornar um valor aleatório
function rand({ min = 0, max = 1000}) {  
    // Este exemplo retorna um número entre dois valores definidos. O valor retornado será maior ou igual a min, e menor que max.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // Arredonda um número para baixo até o número inteiro mais próximo
}

// Chamando a função rand() passando um objeto como parãmetro com os valores max e min
const obj = { max: 40, min: 50}
console.log(rand(obj))
//console.log(rand({ min: 955 }))
//console.log(rand({}))
//console.log(rand())