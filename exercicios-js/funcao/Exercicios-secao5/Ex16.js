let calculadora = (n1, operacao, n2) => {
    switch (operacao) {
        case "+":
            return (n1 + n2)
            break;
        case "-":
            return (n1 - n2)
            break;
        case "*":
            return (n1 * n2)
            break;
        case "/":
            return (n1 / n2)
            break;
        default:
            return ("Operador inválido")
            break
    }
}

console.log("Adição: " + calculadora(10,"+",5))
console.log("Subtração: " + calculadora(10,"-",5))
console.log("Multiplicação: " + calculadora(10,"*",5))
console.log("Divisão: " + calculadora(10,"/",5))
console.log("Erro: " + calculadora(10,"x",5))