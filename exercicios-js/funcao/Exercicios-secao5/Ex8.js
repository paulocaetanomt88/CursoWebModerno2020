let stringPontuacoes = "10, 20, 30, 8, 40, 3, 0, 50, 1, 60, 80, 100"
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(',')
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let primeiraPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 0; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))