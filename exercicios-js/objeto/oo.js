//forma Procedural
function processamento (valor1, valor2, valor3) {
    // faz algum processamento e retorna algo (ou nao)
}
// chamando a função
processamento ("valor1", 2, "valor3")

//forma Orientada a Objetos (o objeto encapsula seus atributos e funçoes internas)
let objeto = {
    // Atributos
    this:valor1 = "A",
    this:valor2 = "B",
    this:valor3 = "C",

    // Comportamentos (funções internas desse objeto)
    processamento(valor1="A", valor2="B", valor3="C") {
        // comandos...
        console.log("Concatenando fica: " + valor1 + " " + valor2 + " " + valor3)
    }
}

objeto.processamento()
objeto.processamento("D", "E", "F")
objeto.processamento(1, 2, 3)
