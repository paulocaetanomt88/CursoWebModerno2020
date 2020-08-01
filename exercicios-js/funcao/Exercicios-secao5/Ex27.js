// Função compara taxa de crescimento de 2 pessoas
// Parâmetros: alturaP1, alturaP2, crescimentoAnualP1, crescimentoAnualP2

let comparaCrescimento = (alturaP1, crescimentoAnualP1, alturaP2, crescimentoAnualP2) => {
        if ((alturaP1 > alturaP2) && (crescimentoAnualP1 < crescimentoAnualP2)) {
            let contaAnos = 1

            while(alturaP2 < (alturaP1+1)) {
                alturaP1 += crescimentoAnualP1
                console.log(`${contaAnos}º ano - altura Pessoa1 = ${alturaP1}`)
                alturaP2 += crescimentoAnualP2
                console.log(`${contaAnos}º ano - altura Pessoa2 = ${alturaP2}`)
                contaAnos++
                console.log(`.`)
            }

            return `Pessoa2 ultrapassará altura de Pessoa1 em ${contaAnos-1} anos.`
        }
        else if ((alturaP1 <  alturaP2) && (crescimentoAnualP1 > crescimentoAnualP2)) {
            let contaAnos = 1

            while(alturaP1 < (alturaP2+1)) {
                alturaP2 += crescimentoAnualP2
                console.log(`${contaAnos}º ano - altura Pessoa2 = ${alturaP2}`)
                alturaP1 += crescimentoAnualP1
                console.log(`${contaAnos}º ano - altura Pessoa1 = ${alturaP1}`)
                contaAnos++
                console.log(`.
                `)
            }

            return `Pessoa1 ultrapassará altura de Pessoa2 em ${contaAnos-1} anos.`
        } else {
            return `Não existe diferença na taxa de crescimento anual`
        }    
}

console.log(comparaCrescimento(100, 20, 140, 10))
