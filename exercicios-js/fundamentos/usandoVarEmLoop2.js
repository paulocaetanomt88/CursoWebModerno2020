const funcs = []

for (var i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// Problema: var não tem escopo de bloco então, neste exemplo,
// vai armazenar e imprimir o valor após a última iteração (i++)
// que será 10 nas duas saídas
funcs[2]()
funcs[8]()