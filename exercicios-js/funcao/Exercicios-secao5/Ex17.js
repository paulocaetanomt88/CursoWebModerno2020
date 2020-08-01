let calculaAumento = (planoDeTrabalho, salario) => {
    switch (planoDeTrabalho) {
        case "A":
            return (salario *= 1.10)
            break;
        case "B":
            return (salario *= 1.15)
            break;
        case "C":
            return (salario *= 1.20)
            break;
        default:
            return "Plano inválido"
            break;
    }
}

console.log(calculaAumento("A", 1000))
console.log(calculaAumento("B", 1000))
console.log(calculaAumento("C", 1000))
console.log(calculaAumento("X", 1000))