let numerosPares1a100 = _ => {
    numerosPares = []
    
    for (i = 1; i <= 100; i++) {
        if (i%2 == 0)
            numerosPares.push(i)
    }

    return numerosPares
}

console.log(numerosPares1a100())