let jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let juros = capitalInicial * taxaJuros * tempoAplicacao
    let montante = capitalInicial + juros
    return "Montante: " + montante + " - Juros simples: " + juros
}

let jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let montante = capitalInicial * Math.pow(1+taxaJuros, tempoAplicacao)
    let juros = montante - capitalInicial
    return "Montante: " + montante.toFixed(2) + " - Juros compostos: " + juros.toFixed(2)
}

console.log(jurosSimples(100, 0.1, 6 ))
console.log(jurosCompostos(100, 0.1, 6 ))