let zeroADez = numero => {
    switch (numero) {
        case 0:
            return "Zero"
            break;
        case 1:
            return "Um"
            break;
        case 2:
            return "Dois"
            break;
        case 3:
            return "Três"
            break;
        case 4:
            return "Quatro"
            break;
        case 5:
            return "Cinco"
            break;
        case 6:
            return "Seis"
            break;
        case 7:
            return "Sete"
            break;
        case 8:
            return "Oito"
            break;
        case 9:
            return "Nove"
            break;
        case 10:
            return "Dez"
            break;
        default:
            return "Fora do intervalo"
    }
}

console.log(zeroADez(0))
console.log(zeroADez(1))
console.log(zeroADez(2))
console.log(zeroADez(3))
console.log(zeroADez(4))
console.log(zeroADez(5))
console.log(zeroADez(6))
console.log(zeroADez(7))
console.log(zeroADez(8))
console.log(zeroADez(9))
console.log(zeroADez(10))
console.log(zeroADez(11))