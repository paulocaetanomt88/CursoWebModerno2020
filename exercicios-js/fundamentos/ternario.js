//constante resultado armazena funçao que recebe 'nota' como parâmetro sem usar parenteses
// 'nota >= 7' é a condição a ser avaliada
// ? equivale a um if, se der verdadeiro executa a primeira parte 'Aprovado' : senão executa a segunda 'Reprovado'
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(5.1))

// outra forma
const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado2(8))
console.log(resultado2(6.5))
