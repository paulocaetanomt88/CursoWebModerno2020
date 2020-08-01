let avaliaNota = nota => {
    if(nota >= 38) {
        if (nota%5 >=3) {
            nota += (5 - nota%5)
            return ("Nota arredondada: " + nota + " - Aprovado")
        } else {
            return ("Aprovado")
        }
    } else {
        return ("Reprovado")
    }
}

console.log(avaliaNota(53))