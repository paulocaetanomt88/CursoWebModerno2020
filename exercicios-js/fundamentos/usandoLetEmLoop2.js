const funcs = []

for (let i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// Diferença: Let tem escopo de função então vai imprimir as posiçoes corretas
// em cada posição informada para sua saída
funcs[2]()
funcs[6]()
funcs[8]()