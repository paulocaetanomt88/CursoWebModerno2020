let conceituaNotas = vetorDeNotas => {
    let conceito = ""
    for(let i=0; i<vetorDeNotas.length; i++) {
        if (vetorDeNotas[i]>0 && vetorDeNotas[i]<=4.9) {
            console.log("D")
        } else if (vetorDeNotas[i]>4.9 && vetorDeNotas[i]<=6.9) {
            console.log("C")
        } else if (vetorDeNotas[i]>6.9 && vetorDeNotas[i]<=8.9) {
            console.log("B")
        } else if (vetorDeNotas[i]>8.9 && vetorDeNotas[i]<=10) {
            console.log("A")
        } else {
            console.log("Nota inválida")
        }
    }
    return "Fim";
}

console.log(conceituaNotas([4,6,8,10,11]))