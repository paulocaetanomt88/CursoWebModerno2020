let calculaMediaPonderada = (codAluno, n1, n2, n3) => {
    let maiorNota = 0
    let notaMenor1 = 0
    let notaMenor2 = 0
    let p1 = 4
    let p2 = 3
    let mediaPonderada = 0
    let situacao = ''


    if (n2 > n1 && n2 > n3) {
        maiorNota = n2
        notaMenor1 = n1
        notaMenor2 = n3
    }   
    else if (n3 > n1 && n3 > n2) {
        maiorNota = n3
        notaMenor1 = n1
        notaMenor2 = n2
    }
    else {
            maiorNota = n1
            notaMenor1 = n2
            notaMenor2 = n3
       }
    
    mediaPonderada = ((maiorNota * 4) + (notaMenor1 * 3) + (notaMenor2 * 3)) / (p1 + p2)
    
    if (mediaPonderada >= 5)
       situacao = 'Aprovado'
    else {
           situacao = 'Reprovado'
       }

    
    return `
    Matrícula: ${codAluno}
    Nota 1: ${n1}
    Nota 2: ${n2}
    Nota 3: ${n3}
    Média: ${mediaPonderada}
    Situação: ${situacao}
    `
}

console.log(calculaMediaPonderada(123456, 6, 9, 2))