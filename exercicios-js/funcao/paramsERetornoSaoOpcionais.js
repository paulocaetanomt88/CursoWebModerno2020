function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

// Testes
console.log(area(2,2)) // => 4
console.log(area(2)) // passando só um parâmetro e omitindo o segundo (necessário => NaN
console.log(area()) // NaN
console.log(area(2, 3, 17, 22, 44)) // + params do que necessário porém funciona pegando apenas os 2 primeiros => 6
console.log(area(5, 5)) // 25 > 20 então cai no primeiro if que imprime mensagem mas não possui retorno, que por isso fica como undefind