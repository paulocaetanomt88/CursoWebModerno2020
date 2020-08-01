let tipoTriangulo = (l1, l2, l3) => {
    if ( l1 === l2 && l2 === l3 ) {
        return "Triângulo Equilátero"
    } else if ((l1 === l2 && l2 !== l3) || (l2 === l3 && l3 !== l1) || (l1 === l3 && l3 !== l2)) {
        return "Triângulo Isósceles"
    } else if (l1 !== l2 && l2 !== l3 && l1 !== l3) {
        return "Triângulo Escaleno"
    } else
        return "Medidas inválidas"
}

console.log(tipoTriangulo(8, 8, 8))
console.log(tipoTriangulo(7, 8, 8))
console.log(tipoTriangulo(8, 8, 7))
console.log(tipoTriangulo(8, 7, 8))
console.log(tipoTriangulo(7, 8, 9))