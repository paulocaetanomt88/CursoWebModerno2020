function rand( [min = 0, max = 1000] ) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // retorna um valor aleatorio dentro dos valores informados mesmo se a ordem estiver invertida
console.log(rand([992])) // passando apenas o mínimo (1º valor), a função assume este e pega o número max definido por padrão
console.log(rand([, 10])) // passando apenas o máximo (2º valor), a função assume 0 como mínimo e o valor recebido como máximo para retornar um valor
console.log(rand([])) // assume os valores mínimo e máximo definidos por padrão, 0 e 1000
// console.log(rand()) // gera um problema por tentar desestruturar algo que é nulo pois não recebeu o objeto esperado