let valorDoPlanoPorFaixaEtaria = idade => {
    let valorBase = 100
    let valorAdicional = 0
    let faixaEtaria = ""
    let valorDoPlano = 0

    if (idade >= 0 && idade < 10)
        faixaEtaria = "A"
    
    if (idade >= 10 && idade <= 30)
        faixaEtaria = "B"
    
    if (idade > 30 && idade <= 60)
        faixaEtaria = "C"

    if (idade > 60)
        faixaEtaria = "D"

    switch (faixaEtaria) {
        case "A":
            valorAdicional = 80
            break;
        case "B":
            valorAdicional = 50
            break;
        case "C":
            valorAdicional = 95
            break;
        case "D":
            valorAdicional = 130
            break;
    }

    valorDoPlano = valorBase + valorAdicional

    return valorDoPlano
}

console.log(valorDoPlanoPorFaixaEtaria(9))
console.log(valorDoPlanoPorFaixaEtaria(20))
console.log(valorDoPlanoPorFaixaEtaria(31))
console.log(valorDoPlanoPorFaixaEtaria(61))