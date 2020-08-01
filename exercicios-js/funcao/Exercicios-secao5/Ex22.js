let calculaAnuidade = (mes, valorAnuidade) => {
    if (mes > 1 && mes <= 12) {
        let mesesEmAtraso = mes - 1
        let montante = valorAnuidade * Math.pow((1+0.05), mesesEmAtraso)
        let juros = montante - valorAnuidade
    
        return "Montante: " + montante.toFixed(2) + " - Juros compostos: " + juros.toFixed(2)    
    } else {
        return "Mês inválido"
    }
}

console.log(calculaAnuidade(3, 100))