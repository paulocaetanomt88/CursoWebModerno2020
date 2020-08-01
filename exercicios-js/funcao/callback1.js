const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
}

// Usa os dois parametros por padrao (1º o nome e 2º o indice)
fabricantes.forEach(imprimir) // "Para cada elemento chame a função imprimir" 

// Passando apenas um parametro vai pegar apenas o nome ("Mercedes", "Audi", "BMW")
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

// Usando Arrow Function com apenas um parametro segue o padrão anterior
fabricantes.forEach(fabricante => console.log(fabricante))
